class AnalyticsService {
  init() {
    if (typeof window === 'undefined') return;

    this.handleGlobalClick = (event) => {
      const link = event.target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href') || '';

      if (href.startsWith('tel:')) {
        this.trackEvent('click_to_call', {
          event_category: 'Engagement',
          event_label: href,
          transport_type: 'beacon'
        });
      }

      if (href.startsWith('sms:')) {
        this.trackEvent('click_to_text', {
          event_category: 'Engagement',
          event_label: href,
          transport_type: 'beacon'
        });
      }
    };

    document.addEventListener('click', this.handleGlobalClick);
  }

  destroy() {
    if (typeof window === 'undefined') return;
    if (this.handleGlobalClick) {
      document.removeEventListener('click', this.handleGlobalClick);
    }
  }

  trackEvent(eventName, params) {
    if (typeof window === 'undefined') return;
    window.dataLayer = window.dataLayer || [];
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    } else {
      window.dataLayer.push({
        event: eventName,
        ...params
      });
    }

    if (typeof window.fbq === 'function') {
      window.fbq('trackCustom', eventName, {
        event_category: params.event_category,
        event_label: params.event_label
      });
    }
  }
}

export default AnalyticsService;

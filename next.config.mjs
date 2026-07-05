/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  async redirects() {
    return [
      {
        source: '/datarecovery',
        destination: '/',
        permanent: true,
      },
      {
        source: '/techsupport',
        destination: '/',
        permanent: true,
      },
      {
        source: '/devicetuneup',
        destination: '/',
        permanent: true,
      },
      {
        source: '/pricing',
        destination: '/#pricing',
        permanent: true,
      },
      {
        source: '/tech-support-in-:townName-il',
        destination: '/data-recovery-in-:townName-il',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

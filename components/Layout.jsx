import Header from './Header';
import Footer from './Footer';
import FloatingSMS from './FloatingSMS';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingSMS />
    </>
  );
}

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import ProductComponent from "../components/ProductComponent";
import ScrollToTop from "../components/ScrollToTop";
import TestimonialComponent from "../components/TestimonialComponent";
import HomePage from "./HomePage";

function HomePage1  ()  {

  useEffect(() => {
    // Fungsi ini akan berjalan tepat setelah halaman selesai di-refresh
    window.scrollTo(0, 0);

    // Jika kamu ingin benar-benar menghapus tanda #products di URL-nya juga:
    if (window.location.hash) {
      window.history.replaceState(null, null, window.location.pathname);
    }},[])
    const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);
    return (
    <>
      <div id="home"><HomePage /></div>
      <div id="products"><ProductComponent /></div>
      <div id="testimonial"><TestimonialComponent /></div>
      <div id="navbar"><NavbarComponent/></div>
      <div id='footer'><FooterComponent/></div>

      {/* Footer dll */}
    </>
    );
};
export default HomePage1;
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';
import ProductComponent from './components/ProductComponent';
import TestimonialComponent from './components/TestimonialComponent';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage1 from './pages/HomePage1';
import RegisterPage from './pages/RegisterPage';
import MemberDashboard from './pages/MemberDashboard';
import AdminDashboard from './pages/AdminDashboard';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';

function App () {
return (
<>
      <NavbarComponent/>
      <Routes>
        {/* Halaman utama yang berisi ID #home, #produk, dll */}
        <Route path="/" element={<HomePage1 />} />
        
        {/* Halaman Login terpisah */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/member/produk" element={<ProductPage />} />
        <Route path="/member/pembayaran" element={<CheckoutPage />} />
        <Route path="/member/tabungan" element={<MemberDashboard />} />
      </Routes>
    </>
  );
}



export default App
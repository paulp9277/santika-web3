import { Container, Row, Col } from 'react-bootstrap';
import { Facebook, Instagram, Tiktok, GeoAltFill, TelephoneFill, EnvelopeFill } from 'react-bootstrap-icons';

const FooterComponent = () => {
  return (
    <footer className="footer-santika mt-5 ">
      <Container className="py-5">
        <Row className="gy-4">
          {/* Kolom 1: Tentang / Logo */}
          <Col lg={4} md={6}>
            <h4 className="fw-bold text-red mb-3">SANTIKA <span className="text-danger">FARM</span></h4>
            <p className="text-light-50">
              Penyedia hewan ternak domba kualitas premium untuk kebutuhan Aqiqah, Qurban, dan hobi. Kami mengutamakan kesehatan dan produktivitas dengan kualitas pakan terbaik.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="social-circle"><Instagram /></a>
              <a href="#" className="social-circle"><Facebook /></a>
              <a href="#" className="social-circle"><Tiktok /></a>
            </div>
          </Col>

          {/* Kolom 2: Navigasi Cepat */}
          <Col lg={2} md={6}>
            <h5 className="text-white fw-bold mb-3">Menu</h5>
            <ul className="footer-nav list-unstyled footer-links ">
              <li><a href="#home">Beranda</a></li>
              <li><a href="#products">Katalog Produk</a></li>
              <li><a href="#tentang">Tentang Kami</a></li>
              <li><a href="#testimonial">Testimonial</a></li>
            </ul>
          </Col>

          {/* Kolom 3: Kontak */}
          <Col lg={3} md={6}>
            <h5 className="text-white fw-bold mb-3">Kontak</h5>
            <ul className="list-unstyled text-light-50">
              <li className="mb-2 d-flex align-items-center"><GeoAltFill className="me-3 text-danger" /> Cilembu, Kec. Pamulihan, Kabupaten Sumedang</li>
              <li className="mb-2 d-flex align-items-center"><TelephoneFill className="me-2 text-danger" /> +62 812 3456 7890</li>
              <li className="mb-2 d-flex align-items-center"><EnvelopeFill className="me-2 text-danger" /> info@santikafarm.com</li>
            </ul>
          </Col>

          {/* Kolom 4: Maps Mini (Opsional) */}
          <Col lg={3} md={6}>
             <h5 className="text-white fw-bold mb-3">Lokasi Kami</h5>
             <div className="rounded overflow-hidden shadow-sm" style={{ height: '120px' }}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.822413452574!2d107.85050937327429!3d-6.91182586764283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68db23508f4ab7%3A0x361ffa89cb691e20!2sKandang%20Domba%20Santika%20Farm!5e0!3m2!1sid!2sid!4v1772365477400!5m2!1sid!2sid" width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy"></iframe>
             </div>
          </Col>
        </Row>
      </Container>

      {/* Baris Hak Cipta */}
      <div className="footer-bottom py-3">
        <Container className="text-center">
          <p className="mb-0 text-light-50">© 2026 Santika Farm. All Rights Reserved.</p>
        </Container>
      </div>
    </footer>
  );
};

export default FooterComponent
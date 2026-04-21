import { useState, } from 'react';
import { Container, Row, Col, Form, Button, Card, InputGroup } from 'react-bootstrap';
import { Envelope, Lock, Eye, EyeSlash } from 'react-bootstrap-icons';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  // TAMBAHKAN BARIS INI:
  const [showPassword, setShowPassword] = useState(false); 
  
  // State lainnya (email, password)
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
e.preventDefault();

const userData = {
    nama: email.split('@')[0], 
    role: email === 'admin@santika.com' ? 'admin' : 'member',
    email: email
  };

  // 2. Simpan ke AuthContext
  login(userData); 

  // 3. LOGIKA NAVIGASI PINTAR
  if (userData.role === 'admin') {
    navigate('/admin/dashboard');
  } else {
    // CEK APAKAH USER INI SUDAH PERNAH MEMILIH DOMBA (PROYEK NABUNG)
    // Kita ambil data dari localStorage
    const tabunganAktif = localStorage.getItem('tabungan_aktif');

    if (tabunganAktif) {
      // Kalau sudah ada data tabungan, langsung ke Dashboard Progres
      navigate('/member/tabungan');
    } else {
      // Kalau belum ada (Member Baru), suruh pilih domba dulu di Katalog
      navigate('/member/produk');
    }
  }
};
  return (
    <div className="login-wrapper bg-light  d-flex align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={4}>
            <Card className="border-0 shadow-lg rounded-4 p-4">
              <Card.Body>
                <div className="text-center mb-4">
                  <h3 className="fw-bold text-danger">SANTIKA FARM</h3>
                  <p className="text-muted small">Silakan login untuk mengelola stok</p>
                </div>

                <Form onSubmit={handleLogin}>
                  {/* Input Email */}
                  <Form.Group className="mb-3">
                    <Form.Label className="small fw-bold">Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text className="bg-white border-end-0">
                        <Envelope className="text-muted" />
                      </InputGroup.Text>
                      <Form.Control
                        type="email"
                        placeholder="contoh : nama@gmail.com"
                        className="border-start-0"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </InputGroup>
                  </Form.Group>

                  {/* Input Password */}
                  <Form.Group className="mb-4">
                    <Form.Label className="small fw-bold">Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text className="bg-white border-end-0">
                        <Lock className="text-muted" />
                      </InputGroup.Text>
                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="border-start-0 border-end-0"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <InputGroup.Text 
                        className="bg-white border-start-0 cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{ cursor: 'pointer' }}
                      >
                        {showPassword ? <EyeSlash /> : <Eye />}
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>

                  <Button variant="danger" type="submit" className="w-100 rounded-pill py-2 fw-bold shadow-sm">
                    Masuk Sekarang
                  </Button>
                  <div className="text-center mt-4">
                <p className="text-muted small mb-0">Belum punya akun Santika Farm?</p>
                <Link to="/register" className="text-danger fw-bold text-decoration-none">
                Daftar Sekarang </Link>
                </div>
                </Form>

                <div className="text-center mt-4">
                  <small className="text-muted">Lupa password? Hubungi IT Support</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
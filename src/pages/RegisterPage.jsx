import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    whatsapp: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Simpan ke localStorage (Simulasi Database)
    const users = JSON.parse(localStorage.getItem('users_list') || '[]');
    
    // Cek apakah email sudah ada
    if (users.find(u => u.email === formData.email)) {
      alert("Email sudah terdaftar!");
      return;
    }

    users.push({ ...formData, role: 'member' }); // Default pendaftar adalah member
    localStorage.setItem('users_list', JSON.stringify(users));
    
    alert("Pendaftaran Berhasil! Silakan Login.");
    navigate('/login');
  };

  return (
    <div className="register-wrapper bg-light d-flex align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="border-0 shadow-lg rounded-4 p-4">
              <h3 className="fw-bold text-danger text-center mb-4">Daftar Akun Santika Farm</h3>
              <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-bold">Nama Lengkap</Form.Label>
                  <Form.Control type="text" placeholder="Masukkan nama sesuai KTP" 
                    onChange={(e) => setFormData({...formData, nama: e.target.value})} required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="small fw-bold">Email Gmail</Form.Label>
                  <Form.Control type="email" placeholder="contoh@gmail.com" 
                    onChange={(e) => setFormData({...formData, email: e.target.value})} required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="small fw-bold">Nomor WhatsApp</Form.Label>
                  <Form.Control type="number" placeholder="08123456789" 
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.value})} required />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="small fw-bold">Password</Form.Label>
                  <Form.Control type="password" placeholder="Minimal 6 karakter" 
                    onChange={(e) => setFormData({...formData, password: e.target.value})} required />
                </Form.Group>

                <Button variant="danger" type="submit" className="w-100 rounded-pill py-2 fw-bold">
                  Daftar Sekarang
                </Button>
                <div className="text-center mt-3">
                  <small>Sudah punya akun? <Link to="/login" className="text-danger">Login</Link></small>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterPage;
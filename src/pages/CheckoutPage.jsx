import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { dombaSelected } = location.state || {};
  const [cicilan, setCicilan] = useState('bulanan');

  if (!dombaSelected) return <Alert variant="danger">Silakan pilih domba dulu!</Alert>;

  const handleBayar = () => {
    alert(`Konfirmasi: Anda memilih cicilan ${cicilan}. Silakan transfer setoran awal.`);
    // Di sini nanti update status user di AuthContext
    navigate('/member/tabungan');

const dataUntukDisimpan = {
    namaDomba: dombaSelected?.jenis || "Domba Qurban",
    targetHarga: dombaSelected?.harga || 3500000,
    terkumpul: 500000, // Simulasi setoran awal 500rb
    status: "Aktif",
    tanggalMulai: new Date().toLocaleDateString()
  };

  // 2. SIMPAN KE LOCAL STORAGE
  // Baris inilah yang membuat 'tabungan_aktif' tercipta di browser
  localStorage.setItem('tabungan_aktif', JSON.stringify(dataUntukDisimpan));

  // 3. Tampilkan Alert (Pesan Berhasil)
  alert("Setoran awal berhasil diterima! Selamat menabung Qurban di Santika Farm.");

  // 4. PINDAH KE DASHBOARD
  navigate('/member/tabungan');
};
  return (
    <Container className="checkout-wrapper">
      <Card className="border-0 shadow-lg rounded-4 p-4 mx-auto" style={{maxWidth: '500px'}}>
        <h4 className="fw-bold mb-4">Konfirmasi Program Tabungan</h4>
        <div className="bg-light p-3 rounded mb-3">
          <h6>{dombaSelected.jenis}</h6>
          <h5 className="text-danger fw-bold">Rp {dombaSelected.harga.toLocaleString()}</h5>
        </div>
        
        <Form.Group className="mb-4">
          <Form.Label className="fw-bold">Pilih Periode Cicilan:</Form.Label>
          <Form.Select onChange={(e) => setCicilan(e.target.value)}>
            <option value="bulanan">Bulanan (10x bayar)</option>
            <option value="mingguan">Mingguan (40x bayar)</option>
          </Form.Select>
        </Form.Group>

        <Button variant="danger" className="w-100 rounded-pill py-2 fw-bold" onClick={handleBayar}>
          Konfirmasi & Bayar Setoran Awal
        </Button>
      </Card>
    </Container>
  );
};

export default CheckoutPage
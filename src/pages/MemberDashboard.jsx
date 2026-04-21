import { Container, Row, Col, Card, ProgressBar, Badge, Button } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const MemberDashboard = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

useEffect(() => {
  if (!loading && !user) {
    navigate('/login'); // Kalau nggak ada user, tendang balik ke login
  }
}, [user, loading, navigate]);

  // Data simulasi (Nanti ini diambil dari Database/Firebase)
  const dataTabungan = {
    target: 3500000,
    terkumpul: 1450000,
    namaPaket: "Paket Domba Super A",
    statusDomba: "Sehat - Sedang Penggemukan",
    beratTerakhir: "25 kg",
    fotoDomba: "https://images.unsplash.com/photo-1511117833450-142f9e578f9f?q=80&w=500" // Contoh foto domba
  };

  const persentase = (dataTabungan.terkumpul / dataTabungan.target) * 100;

  return (
    <div className="dashboard-wrapper bg-light">
      <Container>
        <Row className="mb-4">
          <Col>
            <h2 className="fw-bold">Halo, {user?.nama || 'Pekurban'}! 👋</h2>
            <p className="text-muted">Pantau terus perkembangan tabungan Qurbanmu di Santika Farm.</p>
          </Col>
        </Row>

        <Row className="gy-4">
          {/* KARTU PROGRES TABUNGAN */}
          <Col lg={8}>
            <Card className="border-0 shadow-sm rounded-4 p-3 mb-4">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="fw-bold mb-0">Progres Tabungan</h5>
                  <Badge bg="success" className="rounded-pill px-3">Aktif</Badge>
                </div>
                <h6 className="text-muted">{dataTabungan.namaPaket}</h6>
                <div className="my-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="fw-bold">Rp {dataTabungan.terkumpul.toLocaleString()}</span>
                    <span className="text-muted">Target: Rp {dataTabungan.target.toLocaleString()}</span>
                  </div>
                  <ProgressBar variant="danger" now={persentase} label={`${persentase.toFixed(0)}%`} style={{height: '20px'}} animated />
                </div>
                <Button variant="outline-danger" className="w-100 rounded-pill fw-bold">
                  Tambah Setoran Tabungan
                </Button>
              </Card.Body>
            </Card>

            {/* RIWAYAT TRANSAKSI */}
            <Card className="border-0 shadow-sm rounded-4 p-3">
              <Card.Body>
                <h5 className="fw-bold mb-3">Riwayat Pembayaran</h5>
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead className="table-light">
                      <tr>
                        <th>Tanggal</th>
                        <th>Jumlah</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>15 Mar 2026</td>
                        <td>Rp 500.000</td>
                        <td><Badge bg="success">Berhasil</Badge></td>
                      </tr>
                      <tr>
                        <td>10 Feb 2026</td>
                        <td>Rp 950.000</td>
                        <td><Badge bg="success">Berhasil</Badge></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* KARTU STATUS DOMBA */}
          <Col lg={4}>
            <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
              <Card.Img variant="top" src={dataTabungan.fotoDomba} alt="Domba Qurban" />
              <Card.Body>
                <h5 className="fw-bold">Status Domba Kamu</h5>
                <hr />
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Kondisi:</span>
                  <span className="fw-bold text-success">{dataTabungan.statusDomba}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="text-muted">Berat:</span>
                  <span className="fw-bold">{dataTabungan.beratTerakhir}</span>
                </div>
                <Button variant="danger" className="w-100 mt-3 rounded-pill fw-bold">
                  Lihat Video Domba
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MemberDashboard;
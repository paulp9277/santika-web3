import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProductPage = () => {
  const navigate = useNavigate();
  // Data ini nantinya diambil dari State Global atau Database
  const daftarDomba = [
    { id: 1, jenis: "Domba Garut Super", berat: "35kg", harga: 3500000, stok: 5, image: "https://images.unsplash.com/photo-1511117833450-142f9e578f9f?q=80&w=500" },
    { id: 2, jenis: "Domba Texel", berat: "40kg", harga: 4200000, stok: 3, image: "https://images.unsplash.com/photo-1484557985045-edf25e08da73?q=80&w=500" },
  ];

  const handlePilihDomba = (domba) => {
    // Arahkan ke halaman pembayaran dengan membawa data domba yang dipilih
    navigate('/member/pembayaran', { state: { dombaSelected: domba } });
  };

  return (
    <div className="product-wrapper bg-light">
      <Container>
        <h2 className="fw-bold text-center mb-4">Pilih Domba Qurban Anda</h2>
        <Row className="gy-4">
          {daftarDomba.map((domba) => (
            <Col md={4} key={domba.id}>
              <Card className="border-0 shadow-sm rounded-4 overflow-hidden h-100">
                <Card.Img variant="top" src={domba.image} style={{height: '200px', objectFit: 'cover'}} />
                <Card.Body>
                  <div className="d-flex justify-content-between mb-2">
                    <Badge bg="danger" className="rounded-pill">Stok: {domba.stok}</Badge>
                    <span className="text-muted small">{domba.berat}</span>
                  </div>
                  <h5 className="fw-bold">{domba.jenis}</h5>
                  <h4 className="text-danger fw-bold">Rp {domba.harga.toLocaleString()}</h4>
                  <Button 
                    variant="outline-danger" 
                    className="w-100 mt-3 rounded-pill fw-bold"
                    onClick={() => handlePilihDomba(domba)}
                  >
                    Mulai Nabung
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductPage;
import React, { useState } from 'react';
import { Accordion, Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { catalog } from '../data';
import { motion, AnimatePresence } from 'framer-motion';

const ProductComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const activeCategory = catalog.find((cat) => cat.id === selectedCategory);
  const handleWhatsApp = (productName, price) => {
    const phoneNumber = "6285156272325"; // awalan 62
    const message = `Halo Santika Farm, saya tertarik dengan produk *${productName}* seharga *${price}*. Apakah masih tersedia?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  return (
    <div className='productPage'>
      <Container>
        <div className="mb-5" >
          <h1 className="fw-bold display-4 display-md-2">Katalog 
            <div style={{ width: '137px', height: '3px', background: '#9a1615'}}></div>
            <span>Produk</span></h1>
          
        </div>

        {/* AnimatePresence biar pas ganti ada transisi halus */}
        <AnimatePresence mode="wait">
          {!selectedCategory ? (
            // --- TAMPILAN PINTU (DIBUNGKUS ANIMASI) ---
            <motion.div
              key="pintu"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Row>
                {catalog.map((cat) => (
                  <Col key={cat.id} md={4} className="mb-4">
                    <Card 
                      className="border-0 shadow-lg text-white overflow-hidden"
                      style={{ cursor: 'pointer', borderRadius: '25px', height: '350px' }}
                      onClick={() => setSelectedCategory(cat.id)}
                    >
                      <Card.Img src={cat.image} className="h-100 w-100 object-fit-cover" />
                      <div style={{
                        position: 'absolute', bottom: 0, left: 0, right: 0, height: '100%',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '30px'
                      }}>
                        <h2 className="fw-bold mb-0">{cat.tittle}</h2>
                        <p>Klik Untuk Melihat Produk →</p>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
            </motion.div>
          ) : (
            // --- TAMPILAN PRODUK (DIBUNGKUS ANIMASI) ---
            <motion.div
              key="produk"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Button 
                variant="outline-dark" 
                className="mb-4 rounded-pill px-4 fw-bold"
                onClick={() => setSelectedCategory(null)}
              >
                ← Kembali
              </Button>

              <h2 className="fw-bold mb-4">Koleksi {activeCategory?.tittle}</h2>
              
              <Row>
                {activeCategory?.items.map((item) => (
                  <Col key={item.id} md={4} className="mb-4">
                    <Card className="border-0 shadow-sm p-3 h-100 text-center" style={{ borderRadius: '20px' }}>
                      <img src={item.image} alt="" />
                      <Card.Body>
                        <h5 className="fw-bold">{item.name}</h5>
                        <h3 className="price-text fw-bold my-3">{item.price}</h3>
                        <h6 className="weight-text fw-bold my-3">{item.weight}</h6>
                        <Button 
                          variant="success" 
                          className="w-100 rounded-pill fw-bold"
                          onClick={() => handleWhatsApp(item.name, item.price)}>
                          <i className="bi bi-whatsapp me-2"></i> Pesan via WhatsApp
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  
                ))}
              </Row>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </div>
  );
};

export default ProductComponent
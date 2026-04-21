import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { Quote, StarFill } from 'react-bootstrap-icons'; // Install icons dulu
import { dataTestimoni } from '../data';

const TestimonialComponent = () => {
  return (
    <section id="testimoni" className="py-5 bg-light">
      <Container>
        {/* Judul Bagian */}
        <div className="text-center mb-5">
          <Badge bg="danger" className="px-3 py-2 rounded-pill mb-2">Apa Kata Mereka?</Badge>
          <h2 className="fw-bold display-5">Suara Kepuasan Pelanggan</h2>
          <p className="text-muted lead mx-auto" style={{ maxWidth: '600px' }}>
            Bukti nyata kualitas dan pelayanan terbaik dari Santika Farm untuk kebutuhan hewan ternak Anda.
          </p>
        </div>

        <Row className="gy-4">
          {dataTestimoni.map((testi) => (
            // Di HP (xs) full, di Tablet (md) 2 kolom, di Laptop (lg) 3 kolom
            <Col key={testi.id} xs={12} md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm rounded-4 testimoni-card p-3">
                <Card.Body className="d-flex flex-column">
                  
                  {/* Ikon Kutipan Besar di Pojok */}
                  <div className="quote-icon-wrapper mb-3 text-danger opacity-25">
                    <Quote size={50} />
                  </div>

                  {/* Isi Komentar */}
                  <Card.Text className="text-muted flex-grow-1 fs-6 lh-base mb-4 italic">
                    "{testi.komentar}"
                  </Card.Text>

                  {/* Bagian Profil Pembeli */}
                  <div className="d-flex align-items-center mt-auto pt-3 border-top">
                    <img 
                      src={testi.avatar} 
                      alt={testi.nama} 
                      className="rounded-circle me-3 border border-2 border-white shadow-sm"
                      style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                    />
                    <div>
                      <h6 className="fw-bold mb-0 text-dark">{testi.nama}</h6>
                      <small className="text-muted">{testi.pekerjaan}</small>
                      {/* Rating Bintang */}
                      <div className="text-warning mt-1">
                        {[...Array(5)].map((_, index) => (
                          <StarFill 
                            key={index} 
                            size={14} 
                            className={index < testi.rating ? "me-1" : "me-1 text-muted opacity-25"} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialComponent
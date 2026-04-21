import React, { useState } from 'react';
import { Container, Row, Col, Card, Table, Button, Badge, Modal, Form, InputGroup } from 'react-bootstrap';
import { PlusCircle, Tag, Hammer, InfoCircle } from 'react-bootstrap-icons';

const AdminDashboard = () => {
  // State untuk List Stok Domba
  const [stokDomba, setStokDomba] = useState([
    { id: 101, jenis: "Domba Garut", berat: "35kg", harga: 3500000, status: "Tersedia" },
    { id: 102, jenis: "Domba Texel", berat: "40kg", harga: 4200000, status: "Terpesan" },
  ]);

  // State untuk Modal
  const [showModal, setShowModal] = useState(false);
  const [newDomba, setNewDomba] = useState({ jenis: '', berat: '', harga: '', deskripsi: '' });

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dombaBaru = {
      id: Date.now(), // ID Unik sementara
      ...newDomba,
      status: "Tersedia"
    };
    setStokDomba([...stokDomba, dombaBaru]);
    setShowModal(false); // Tutup modal setelah simpan
    alert("Stok Domba Berhasil Ditambahkan!");
  };

  return (
    <div className="admin-wrapper bg-light min-vh-100 pt-5 mt-5 pb-5">
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold mb-0">Manajemen Stok Domba</h2>
            <p className="text-muted small">Update ketersediaan hewan ternak Santika Farm</p>
          </div>
          <Button variant="danger" className="rounded-pill px-4 fw-bold shadow-sm" onClick={handleShow}>
            <PlusCircle className="me-2" /> Tambah Stok
          </Button>
        </div>

        {/* TABEL STOK DOMBA */}
        <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
          <Table responsive hover className="mb-0 align-middle">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Jenis Domba</th>
                <th>Berat</th>
                <th>Harga</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {stokDomba.map((d) => (
                <tr key={d.id}>
                  <td>#{d.id.toString().slice(-3)}</td>
                  <td className="fw-bold">{d.jenis}</td>
                  <td><Badge bg="info" className="text-dark">{d.berat}</Badge></td>
                  <td>Rp {Number(d.harga).toLocaleString()}</td>
                  <td>
                    <Badge bg={d.status === "Tersedia" ? "success" : "warning"}>
                      {d.status}
                    </Badge>
                  </td>
                  <td>
                    <Button variant="outline-secondary" size="sm" className="rounded-pill px-3 me-2">Edit</Button>
                    <Button variant="outline-danger" size="sm" className="rounded-pill px-3">Hapus</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>

        {/* MODAL TAMBAH STOK */}
        <Modal show={showModal} onHide={handleClose} centered backdrop="static">
          <Modal.Header closeButton className="border-0">
            <Modal.Title className="fw-bold">Tambah Unit Domba Baru</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label className="small fw-bold">Jenis / Ras Domba</Form.Label>
                <InputGroup>
                  <InputGroup.Text><Tag /></InputGroup.Text>
                  <Form.Control 
                    type="text" 
                    placeholder="Contoh: Domba Garut Super" 
                    required 
                    onChange={(e) => setNewDomba({...newDomba, jenis: e.target.value})}
                  />
                </InputGroup>
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="small fw-bold">Berat (kg)</Form.Label>
                    <InputGroup>
                      <InputGroup.Text><Hammer /></InputGroup.Text>
                      <Form.Control 
                        type="text" 
                        placeholder="35kg" 
                        required 
                        onChange={(e) => setNewDomba({...newDomba, berat: e.target.value})}
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="small fw-bold">Harga Jual</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>Rp</InputGroup.Text>
                      <Form.Control 
                        type="number" 
                        placeholder="3500000" 
                        required 
                        onChange={(e) => setNewDomba({...newDomba, harga: e.target.value})}
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-4">
                <Form.Label className="small fw-bold">Deskripsi Tambahan</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={3} 
                  placeholder="Contoh: Tanduk simetris, bulu bersih..." 
                  onChange={(e) => setNewDomba({...newDomba, deskripsi: e.target.value})}
                />
              </Form.Group>

              <div className="d-flex gap-2">
                <Button variant="light" className="w-100 rounded-pill fw-bold text-muted" onClick={handleClose}>
                  Batal
                </Button>
                <Button variant="danger" type="submit" className="w-100 rounded-pill fw-bold">
                  Simpan Stok
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>

      </Container>
    </div>
  );
};

export default AdminDashboard;
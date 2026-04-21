import { Row, Container, Col, Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { ArrowRightCircleFill } from 'react-bootstrap-icons';
import logo1 from "../assets/img/logo/21.png"
import { HashLink } from 'react-router-hash-link'; // Rekomendasi buat scroll halus
 
const HomePage = () => {
    let navigate = useNavigate();
    

  return (
    <div className="homepage">
        <header className="w-100 min-h-100 d-flex align-items-center">
            <Container>
            <Row className="header-box">
               <Col>
               <div>
               <h1>SANTIKA FARM</h1>
               </div>
               <p className="p1"> Good Farm for Good Life</p>
               <br/>
               <p className="p2"> Kami menyediakan berbagai pilihan domba mulai dari bibit unggul, pejantan berkualitas untuk pembiakan, hingga stok hewan qurban yang telah melewati seleksi kesehatan dan standar bobot yang ketat. </p>
               <HashLink to="#products" smooth className="btn baten-produk btn-lg rounded-pill px-4 py-3 shadow">Lihat Produk <ArrowRightCircleFill className="ms-2" /></HashLink>
               </Col>
               <Col lg="6" >
              <Card className="gambir">
               <img src={logo1} alt="" />
               </Card>
               </Col>
            </Row>
            <div className="bawah">
            <h1 className="display-4 display-md-2">Menyediakan pilihan domba qurban dengan standar pakan pilihan dan pengawasan kesehatan berkala demi menjaga kondisi fisik hewan tetap prima hingga hari pengiriman</h1>
            </div>
        </Container>
        </header>
        <div className="product w-100 min-vh-10"></div>  

    </div>
  )
}

export default HomePage
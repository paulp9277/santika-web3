import { useState, useEffect } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useAsyncValue, useLocation, useNavigate } from 'react-router-dom';
import logo1 from '../assets/img/logo/logo1.png'
import { Facebook, Instagram, Tiktok } from 'react-bootstrap-icons';
import { useAuth } from '../context/AuthContext';


const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor =() => {
    if (window.scrollY> 10) {
      setChangeColor(true)
    }
    else {
      setChangeColor(false)
    }
  }
  
    useEffect(() => {
      changeBackgroundColor();

      window.addEventListener('scroll', changeBackgroundColor)
    })
  const { user, logout } = useAuth()
  const navigate = useNavigate();
  const handlelogout = () => {
    logout();
    navigate('/')
  }

  return (
    <div> <Navbar id='main-navbar' expand="lg" className={changeColor ? 'color-active' : ''}>
      <Container>
        <Navbar.Brand 
        href="/#home" className='d-flex align-items-center text-white'><img src={logo1} alt="logo santika farm" height="40" className='d-inline-block align-top' style={{ objectFit: 'contain'}}/><h className=" span1 ms-1 fw-bold d-none d-sm-block text-center mt-2 fs-6" > SANTIKA FARM </h></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto ">
            <Nav.Link href="/#home" className='menu-text' active={location.hash ==='#home'}>BERANDA</Nav.Link>
            <Nav.Link href="/#products" className='menu-text' active={location.hash ==='#products'}>PRODUK</Nav.Link>
            <Nav.Link href="/#testimonial" className='menu-text' active={location.hash ==='#testimonial'}>TESTIMONIAL</Nav.Link>
            </Nav>
            <div className="vr d-none d-lg-block mx-3 shadow-sm" style={{ height: '30px', marginTop: '5px' }}></div>
            <Nav className="ms-auto d-flex flex-row justify-content-center mt-3 mt-lg-0">
            <Nav.Link href="https://www.facebook.com/santikafarm" target="_blank" className="mx-2 social-icon"><Facebook size={20}/></Nav.Link>
            <Nav.Link href="https://www.instagram.com/santikafarm/" target="_blank" className="mx-2 social-icon"><Instagram size={20}/></Nav.Link>
            <Nav.Link href="https://www.tiktok.com/@irfanazizi_07" target="_blank" className="mx-2 social-icon"><Tiktok size={20}/></Nav.Link>
            
          </Nav>
          {!user? (
          <Nav.Link
          as={Link}
          to="/login"> 
          <button className='btn btn-outline-primary rounded-1' onClick= {() => navigate('/login')}>Login</button>
          </Nav.Link>
          ) : (
          <NavDropdown
            title={<span className="fw-bold text-danger">Hi, {user.nama}</span>} 
                id="user-dropdown"
                className="ms-lg-3">
                <NavDropdown.Item as={Link} to={user.role === 'admin' ? '/admin/dashboard' : '/member/tabungan'}>
                  Dashboard {user.role === 'admin' ? 'Admin' : 'Saya'}
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handlelogout} className="text-danger">
                  Keluar (Logout)
                </NavDropdown.Item>
              </NavDropdown>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
export default NavbarComponent
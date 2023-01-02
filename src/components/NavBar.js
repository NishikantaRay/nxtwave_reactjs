
// Importing React Bootstrap components.
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//import nxtwave logo from assets folder
import logo from '../assets/nxtWaveLogo.svg';
import user from '../assets/user.webp';

// Importing ImageTag component.
import ImageTag from './ImageTag';

export default function NavBar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className='shadow-sm p-3 mb-5 bg-white rounded'>
                <Container >
                    <Navbar.Brand href="#home">
                        <ImageTag src={logo} alt='NextWave Logo' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav >
                            <Nav.Link >
                                <button className='btn btn-success mr-3' >ADD ITEM</button>
                            </Nav.Link>

                            <Nav.Link >
                                <button className='btn btn-outline-secondary mr-3' >Log out</button>
                            </Nav.Link>

                            <Nav.Link eventKey={2} >
                                <ImageTag src={user} alt='user image' width="40" height="40" />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

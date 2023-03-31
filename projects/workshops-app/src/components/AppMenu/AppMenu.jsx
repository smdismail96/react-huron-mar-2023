import { Navbar, Nav, Container } from 'react-bootstrap';

const AppMenu = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Workshops App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/workshops">Workshops List</Nav.Link>
                        <Nav.Link href="/feedback">Feedback</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

// const Navbar = () => {

// }

// Navbar.Brand = () => {

// }

export default AppMenu;
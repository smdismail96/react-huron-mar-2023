import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const AppMenu = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                {/* NOTE: The default value of activeClassName is "active" and we do not need to mention if our class is also called "active". The activeClassName class is applied only when the current browser path and the link's target ("to" prop value) match */}
                {/* activeClassName="active" */}
                <Navbar.Brand to="/" as={NavLink}>Workshops App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                        <Nav.Link to="/workshops" as={NavLink}>Workshops List</Nav.Link>
                        <Nav.Link to="/feedback" as={NavLink}>Feedback</Nav.Link>
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
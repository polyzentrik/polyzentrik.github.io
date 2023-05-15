import * as React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import "../components/pretty.css"

const CategoriesComponent = () => {
    return (

        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="mt-0 mb-2 mx-1 rounded border border-dark p-0">
            <Container fluid className='p-0'>
                <Navbar.Brand className="border-end border-dark px-3 py-1 checkers">Categories</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/blog/">All</Nav.Link>
                        <Nav.Link href="/blog/company/">Polyzentrik</Nav.Link>
                        <Nav.Link href="/blog/sustainability/">Digital sustainability</Nav.Link>
                        <Nav.Link href="/blog/artificial-intelligence/">Sustainable AI</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >






    )
}

export default CategoriesComponent
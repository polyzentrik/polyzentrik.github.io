import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import "../components/pretty.css"

const NavComponent = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="my-0 py-0 main-nav fixed-top bg-white border-bottom border-dark pink">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ms-2 "/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="border-start border-dark">
                        <Nav.Item>
                            <Nav.Link href="/">
                                Home
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/services/">
                                Services
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/about/">
                                About
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/blog/">
                                Blog
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default NavComponent
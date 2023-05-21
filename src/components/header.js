import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button'
import "../components/pretty.css"

const HeaderComponent = () => {
    return (
        <div className="green py-0">
            <Navbar collapseOnSelect expand="lg" className="py-3">
                <Container fluid>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-1" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="/services/">Services</Nav.Link></Nav.Item>
                            <NavDropdown title="Blog" id="blog-dropdown"
                                renderMenuOnMount={true} 
                                onClick={() => { if (window.screen.width > 992) { window.location.href = '/blog/' } }} >
                                <NavDropdown.Item href="/blog/">
                                    All categories
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/blog/company/">
                                    Polyzentrik
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/blog/sustainability/">
                                    Digital sustainability
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/blog/artificial-intelligence/">
                                    Sustainable AI</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Item>
                                <Nav.Link href="/gateway/">
                                    <Button variant="" className="special-bg capsies px-5 pink border border-2 border-dark">Pay / Donate</Button>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="border border-end border-1 border-dark mx-2 hidey-lg">
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="https://www.linkedin.com/company/polyzentrik/" target="_blank" rel="noopener noreferrer">
                                    <BsLinkedin /><span className="accessibility-hide">LinkedIn</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="https://github.com/polyzentrik" target="_blank" rel="noopener noreferrer">
                                    <BsGithub /><span className="accessibility-hide">GitHub</span>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default HeaderComponent
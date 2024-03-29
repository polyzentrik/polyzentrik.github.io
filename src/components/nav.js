import React from 'react'
import { BsLinkedin, BsGithub, BsList } from 'react-icons/bs'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import "../components/pretty.css"

const NavComponent = () => {
    return (
        <Navbar collapseOnSelect variant="dark" expand="lg" className="my-0 py-0 main-nav fixed-top shadow">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ms-auto custom-toggler">
                    <span>
                        <BsList />
                    </span>
                </Navbar.Toggle>

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Item className="">
                            <Nav.Link href="/">
                                Home
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="">
                            <Nav.Link href="/services/">
                                Services
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="">
                            <Nav.Link href="/about/">
                                About
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="">
                            <Nav.Link href="/blog/">
                                Blog
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Nav className="linky">
                        <Nav.Item>
                            <Nav.Link href="https://www.linkedin.com/company/polyzentrik/" target="_blank" rel="noopener noreferrer">
                                <BsLinkedin title="LinkedIn" />
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="https://github.com/polyzentrik" target="_blank" rel="noopener noreferrer">
                                <BsGithub title="GitHub" />
                            </Nav.Link>
                        </Nav.Item>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default NavComponent
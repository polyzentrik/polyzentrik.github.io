import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { BsLinkedin, BsGithub } from "react-icons/bs"
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import "../components/pretty.css"

const HeaderComponent = () => {
    return (
        <header className="green">
            <Navbar collapseOnSelect expand="lg" bg="white" className="border-bottom border-2">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <StaticImage src="../images/graphics/icon.png" className="d-inline-block align-top" alt="Logo" width={70} aspectRatio={1 / 1} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto hover-include">
                            <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="/blog">Blog</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="/roadmap">Roadmap</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="/about">About & Contact</Nav.Link></Nav.Item>
                        </Nav>
                        <Nav>
                            <Nav.Item>
                                <Nav.Link href="/gateway">
                                    <Button variant="" className="special-bg capsies px-5 pink border border-2 border-dark">Pay / Donate</Button>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="border border-end border-1 border-dark mx-2 hidey-lg">
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="https://www.linkedin.com/company/polyzentrik/" target="_blank" rel="noopener noreferrer" className="hidey">
                                    <BsLinkedin /><span className="accessibility-hide">LinkedIn</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="https://github.com/polyzentrik" target="_blank" rel="noopener noreferrer" className="hidey">
                                    <BsGithub /><span className="accessibility-hide">GitHub</span>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default HeaderComponent
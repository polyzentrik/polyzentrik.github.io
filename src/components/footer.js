import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { fecha } from './swagger'

const FooterComponent = () => {
    const data = useStaticQuery
        (graphql`query {
        site {
        siteMetadata {
            title,
            description
                }
            }
        }
    `)

    return (
        <footer>
            <Container fluid className="border-5 border-top pt-1">
                <Row className="pb-1">
                    <Col md={6}>
                        <h1 className="pzntrk">{data.site.siteMetadata.title}</h1>
                        <p className="my-auto small">&#169; {fecha().year}. All rights reserved.</p>
                    </Col>
                    <Col md={3} className='mt-3 mt-md-0'>
                        <h3>Services</h3>
                        <ul className="mt-0">
                            <li className=""><Link to="/services/content">Content</Link></li>
                            <li className=""><Link to="/services/analytics">Analytics</Link></li>
                            <li className=""><Link to="/services/development">Development</Link></li>
                        </ul>
                    </Col>
                    <Col className='mt-3 mt-md-0'>
                        <h3>Site</h3>
                        <ul className="mt-0">
                            <li className=""><Link to="/">Home</Link></li>
                            <li className=""><Link to="/services">Services</Link></li>
                            <li className=""><Link to="/blog">Blog</Link></li>
                            <li className=""><Link to="/roadmap">Roadmap</Link></li>
                            <li className=""><Link to="/about">About & Contact</Link></li>
                            
                        </ul>
                    </Col>
                </Row>
                <Row className="lower-footer d-flex border-1 border-top py-2 my-2 small">
                    <Col md={6} className="my-auto">
                    </Col>
                    <Col className="text-end my-auto">
                        <ul className="my-auto">
                            <li className=""><Link to="/terms-conditions">Terms & Conditions</Link></li>
                            <li className=""><Link to="/terms-conditions">Privacy & Cookies</Link></li>
                            <li className=""><Link to="/terms-conditions">Disclaimer</Link></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default FooterComponent
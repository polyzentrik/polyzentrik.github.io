import * as React from 'react'
import { useStaticQuery, graphql, Link, Script } from 'gatsby'
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
        <footer className="mb-0 pb-0">
            <Container fluid className="">
                <Row className="pb-2">
                    <Col md={6} className="">
                        <Row>
                            <h1 className="pzntrk mb-0">{data.site.siteMetadata.title}</h1>
                            <p className="mt-0 small copy-r">&#169; {fecha().year}. All rights reserved.</p>
                            <br />
                        </Row>
                        <Row className="mt-3">

                        </Row>
                    </Col>
                    <Col md={3} className='mt-3 mt-md-0'>
                        <h2>Services</h2>
                        <ul className="mt-0">
                            <li className=""><Link to="/services/sustainability-reporting/">Sustainability reporting</Link></li>
                            <li className=""><Link to="/services/web-development/">Website development</Link></li>
                            <li className=""><Link to="/services/sustainability-transcriptions-ai/">Sustainability transcriptions</Link></li>
                        </ul>
                    </Col>
                    <Col className='mt-3 mt-md-0'>
                        <h2>Site</h2>
                        <ul className="mt-0">
                            <li className=""><Link to="/">Home</Link></li>
                            <li className=""><Link to="/blog/">Blog</Link></li>
                            <li className=""><Link to="/roadmap/">Roadmap</Link></li>
                            <li className=""><Link to="/about/">About & Contact</Link></li>

                        </ul>
                    </Col>
                </Row>
                <Row className="lower-footer d-flex py-2 small">
                    <Col md={6} className="my-auto small">
                        <ul className="my-auto small">
                            <li className="me-1">As per the&nbsp;<a href="https://www.websitecarbon.com" target="_blank" rel="noreferrer noopener">Website Carbon</a>,</li>
                            <li><div id="wcb" class="small"></div></li>
                        </ul>
                    </Col>
                    <Col className="text-end my-auto small">
                        <ul className="my-auto small">
                            <li><Link to="/terms-conditions/">Terms & Conditions | Privacy & Cookies | Disclaimer</Link></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Script src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js" />
        </footer>
    )
}

export default FooterComponent
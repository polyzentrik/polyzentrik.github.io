import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import FooterComponent from './footer'
import BenefitsComponent from './benefits'
import HeaderComponent from './header'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import "../components/pretty.css"
import "../components/pretty.css"


const Layout = ({ pageTitle, children }) => {
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

    if (typeof window === 'undefined') {
        return <></>;
    } else {

        return (
            <Container fluid className="px-0 mx-0">
                <HeaderComponent />
                <main className="page-content">
                        <section>
                            <Container fluid className="green-bg">
                            <Row className="branding border-bottom border-2">
                                <Col className="welcome my-md-auto col-12 col-md-6">
                                    <h1 className="pzntrk">{data.site.siteMetadata.title}</h1>
                                    <h2 className="hidey-lg mb-5">{data.site.siteMetadata.description}</h2>
                                </Col>
                                <Col className="my-md-auto col-12 col-md-6">
                                    <p className="big-p">Digital solutions to help you <strong><em>be more sustainable</em></strong> and enable you to <strong><em>analyse</em></strong> and <strong><em>communicate</em></strong> your sustainability.</p> 
                                    <BenefitsComponent />
                                </Col>
                            </Row>
                            </Container>
                        </section>
                        <section className="content">
                            <Container>
                            <Row>
                                <h2 className="pzntrk">{pageTitle}</h2>
                                <div>{children}</div>
                            </Row>
                            </Container>
                        </section> 
                </main>
                <FooterComponent />
            </Container>

        )
    }
}

export default Layout
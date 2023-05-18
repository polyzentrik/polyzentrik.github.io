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
                        <Container fluid className="slide-bg text-center">
                            <Row className="branding checkers">
                                <Col className="welcome my-md-auto">
                                    <h1 className="pzntrk">{data.site.siteMetadata.title}</h1>
                                    <p>Digital resources and services to help you at different stages of your sustainability journey</p>
                                </Col>
                            </Row>
                        </Container>
                        <BenefitsComponent />
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
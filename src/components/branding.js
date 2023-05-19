import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "../components/pretty.css"

const BrandingComponent = () => {
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
        <section>
            <Container fluid className="slide-bg text-center">
                <Row className="branding checkers">
                    <Col className="welcome">
                        <h1 className="pzntrk">{data.site.siteMetadata.title}</h1>
                        <p className="pink">{data.site.siteMetadata.description}</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BrandingComponent
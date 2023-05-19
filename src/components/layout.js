import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import FooterComponent from './footer'
import BrandingComponent from './branding'
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
                <header>
                    <HeaderComponent />
                    <BrandingComponent />
                    
                </header>
                <main>
                    <section className="content mt-5">
                        <Container fluid className="px-0">
                            <Row>
                                <h2 className="pzntrk hide">{pageTitle}</h2>
                                <div>{children}</div>
                            </Row>
                        </Container>
                    </section>
                </main>
                <footer>
                    <FooterComponent />
                </footer>
            </Container>

        )
    }
}

export default Layout
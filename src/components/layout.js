import React from 'react'
import FooterComponent from './footer'
import BrandingComponent from './branding'
import HeaderComponent from './header'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import "../components/pretty.css"
import "../components/pretty.css"

const Layout = ({ pageTitle, children }) => {

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
                    <section className="content mt-0">
                        <Container fluid className="">
                            <Row>
                                <h2 className="pzntrk text-center shadow py-5 special-bg">{pageTitle}</h2>
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
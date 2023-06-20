import React from 'react';
import Scene from "../components/scene"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import "../components/pretty.css"


const BrandingComponent = () => {
    return (
        <section>
            <Container fluid className="text-center">
                <Row className="scene">
                    <Scene />
                </Row>
            </Container>
        </section>
    )
}

export default BrandingComponent
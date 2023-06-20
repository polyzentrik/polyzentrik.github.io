import React, { useRef } from 'react';
import Scene from "../components/scene"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import "../components/pretty.css"


const BrandingComponent = () => {
    const width = useRef(window.innerWidth)
    if (width.current > 768) {
        return (
            <section>
                <Container fluid className="text-center">
                    <Row className="scene">
                        <Scene />
                    </Row>
                </Container>
            </section>
        )
    } else {
        return (
            <></>
        )
    }
}

export default BrandingComponent
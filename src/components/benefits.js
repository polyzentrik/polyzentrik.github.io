import * as React from 'react'
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'

const BenefitsComponent = () => {
    return (
        <Carousel variant="dark" className="benefits-carousel shadow pink">
            <Carousel.Item interval={2000}>
                <Card>
                    <Card.Body>#Climate</Card.Body>
                </Card>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <Card>
                    <Card.Body>#TripleBottomLine</Card.Body>
                </Card>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <Card>
                    <Card.Body>#NetZero</Card.Body>
                </Card>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <Card>
                    <Card.Body>#ESG</Card.Body>
                </Card>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <Card>
                    <Card.Body>#EarthSystems</Card.Body>
                </Card>
            </Carousel.Item>
        </Carousel>
    )
}

export default BenefitsComponent
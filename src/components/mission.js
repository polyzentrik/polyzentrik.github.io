import React from "react"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from 'react-bootstrap/Card'

const MissionComponent = () => {
    return (
        <Container fluid className="horizontal-section shadow">
            <Row>
                <Col className="col-2 offset-3" data-sal="slide-up" data-sal-delay="400" data-sal-easing="ease">
                    <Card>
                        <Card.Body>
                            <Card.Title data-sal="zoom-out" data-sal-delay="400" data-sal-easing="ease">
                                <h4>Our mission</h4>
                            </Card.Title>
                            <Card.Text>
                                <p>To help individuals and SMEs access and use digital technologies, especially, but not exclusively, where it relates to sustainability.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="col-2" data-sal="slide-up" data-sal-delay="400" data-sal-easing="ease">
                    <Card>
                        <Card.Body>
                            <Card.Title data-sal="zoom-out" data-sal-delay="400" data-sal-easing="ease">
                                <h4>Our method</h4>
                            </Card.Title>
                            <Card.Text>
                                <p>We think modularly. We are developing small services and resources that solve concrete challenges and can combined into more complex solutions.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="col-2" data-sal="slide-up" data-sal-delay="400" data-sal-easing="ease">
                    <Card>
                        <Card.Body>
                            <Card.Title data-sal="zoom-out" data-sal-delay="400" data-sal-easing="ease">
                                <h4>Our mindset</h4>
                            </Card.Title>
                            <Card.Text>
                                <p>We lead by example. This page is fast and highly sustainable.
                                    Don't take our word, ask <a href="https://pagespeed.web.dev/analysis/https-www-polyzentrik-com/hef1ww54o2?form_factor=desktop" target="_blank" rel="noopener noreferrer">Google's PageSpeed Insights</a> and
                                    the <a href="https://www.websitecarbon.com/website/polyzentrik-com/" target="_blank" rel="noopener noreferrer">WCC</a>.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default MissionComponent
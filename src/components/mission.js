import React, { useState } from "react"
import Container from "react-bootstrap/esm/Container"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';

const MissionComponent = () => {
        const [mission, setMission] = useState(false);
        const [method, setMethod] = useState(false);
        const [mindset, setMindset] = useState(false);

        return (
                <Container fluid className="company-statement text-center">
                        <Row data-sal="zoom-out" data-sal-delay="600" data-sal-easing="ease">
                                <Col className="col-lg-6 offset-lg-3">
                                        <Button variant="light" onClick={() => setMission(true)} className="pink mx-1">
                                                <p className="p-0 m-0">Our mission</p>
                                        </Button>
                                        <Button variant="light" onClick={() => setMethod(true)} className="pink mx-1">
                                                <p className="p-0 m-0">Our method</p>
                                        </Button>
                                        <Button variant="light" onClick={() => setMindset(true)} className="pink mx-1">
                                                <p className="p-0 m-0">Our mindset</p>
                                        </Button>

                                        <Modal centered show={mission} onHide={() => setMission(false)} dialogClassName="mission-modal">
                                                <Modal.Header closeButton>
                                                </Modal.Header>
                                                <Modal.Body className="d-flex">
                                                        <span className="my-auto">
                                                                <h4>Our mission</h4>
                                                                <p>To help individuals and small to mid-sized organisations access and use digital technologies, especially where it relates to sustainability.</p>
                                                        </span>
                                                </Modal.Body>
                                        </Modal>

                                        <Modal centered show={method} onHide={() => setMethod(false)} dialogClassName="mission-modal">
                                                <Modal.Header closeButton>
                                                </Modal.Header>
                                                <Modal.Body className="d-flex">
                                                        <span className="my-auto">
                                                                <h4>Our method</h4>
                                                                <p>We are working towards a modular approach to digital sustainability. We are slowly but steadily developing services and resources that solve specific sustainability challenges by themselves and can combined into more complex solutions.</p>
                                                        </span>
                                                </Modal.Body>
                                        </Modal>

                                        <Modal centered show={mindset} onHide={() => setMindset(false)} dialogClassName="mission-modal">
                                                <Modal.Header closeButton>
                                                </Modal.Header>
                                                <Modal.Body className="d-flex">
                                                        <span className="my-auto">
                                                                <h4>Our mindset</h4>
                                                                <p>We practice what we preach. This page is incredibly fast and highly sustainable. 
                                                                        Don't take our word for it, ask <a href="https://pagespeed.web.dev/analysis/https-www-polyzentrik-com/hef1ww54o2?form_factor=desktop" target="_blank" rel="noopener noreferrer">Google's PageSpeed Insights</a> and 
                                                                        the <a href="https://www.websitecarbon.com/website/polyzentrik-com/" target="_blank" rel="noopener noreferrer">Website Carbon Calculator</a>.</p>
                                                        </span>
                                                </Modal.Body>
                                        </Modal>
                                </Col>
                        </Row>
                </Container >
        )
}

export default MissionComponent
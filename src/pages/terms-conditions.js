import * as React from "react"
import Seo from '../components/seo'
import Layout from '../components/layout'
import TermsComponent from "../components/terms"
import PrivacyComponent from "../components/privacy"
import CookiesComponent from "../components/cookies"
import DisclaimerComponent from "../components/disclaimer"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

const TermsConditionsPage = () => {
    return (
        <Layout pageTitle="Terms & conditions">
            <p className="big-p">By using our website and/or services you agree to the following.</p>
            <Row>
                <Col md={12}>
                    <Container className="border rounded bg-white px-3">
                        <Row className="my-2">
                            <Col>
                                <h2 className="pzntrk my-3 border-bottom">Summary</h2>
                                <p className="small">The general idea is that you acknowledge this website is offered as-is and without any warranties, and that your use of this website constitutes agreement to all terms, conditions, and policies below.</p>
                                <p className="small">Where the specifics of any policy contradict this summary, the policy takes precedence. Where applicable laws contradict this summary or anything below, the law obviously takes precedence. </p>
                                <p className="small">Polyzentrik does not currently use cookies or otherwise save visitors data.</p>
                                <h2 className="pzntrk my-3 border-bottom">Detailed policies</h2>
                                <Tabs defaultActiveKey="terms" id="left-tabs" className="mb-3 small">
                                    <Tab eventKey="terms" title="Terms & Conditions">
                                        <TermsComponent />
                                    </Tab>
                                    <Tab eventKey="privacy" title="GDPR/Privacy">
                                        <PrivacyComponent />
                                    </Tab>
                                    <Tab eventKey="cookies" title="Cookies">
                                        <CookiesComponent />
                                    </Tab>
                                    <Tab eventKey="disclaimer" title="Disclaimer">
                                        <DisclaimerComponent />
                                    </Tab>
                                </Tabs>
                            </Col>
                        </Row>
                    </Container>
                </Col>

            </Row>
        </Layout >
    )
}

export const Head = () => (
    <Seo title="Polyzentrik > Terms & conditions"
        description="Terms, conditions, & other policies." />
)

export default TermsConditionsPage
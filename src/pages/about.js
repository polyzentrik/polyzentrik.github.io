import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { BsLinkedin, BsGithub, BsHouseFill, BsTelephoneFill, BsEnvelope } from "react-icons/bs"
import Layout from '../components/layout'
import Seo from '../components/seo'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

const AboutPage = () => {
    return (
        <Layout pageTitle="About">
            <p className="big-p">Get to know Polyzentrik.</p>
            <Row className="about">
                <Col md={8}>
                    <Container className="border rounded bg-white">
                        <Row className="my-2">
                            <Col lg={3} className="linky text-end">
                                <StaticImage src="../images/with-suit.jpeg" alt="Photo of J" className="rounded" />
                                <ul>
                                    <li><a href="https://www.linkedin.com/in/jbolns" target="_blank" rel="noreferrer" aria-label="Link to Linkedin"><BsLinkedin /></a></li>
                                    <li><a href="https://github.com/jbolns" target="_blank" rel="noreferrer" aria-label="Link to Linkedin"><BsGithub /></a></li>
                                    <li><a href="https://www.josebolanos.xyz/" target="_blank" rel="noreferrer" aria-label="Link to Linkedin"><BsHouseFill /></a></li>
                                </ul>
                            </Col>
                            <Col className="pb-2 border-hidey">
                                <h2 className="pzntrk my-3 border-bottom">Founder</h2>
                                <p>Polyzentrik is (currently) a private practice by Dr José A Bolanos.</p>
                                <p>José studied and worked for a while in some of the top universities in the UK and Germany, on projects related to sustainability, private governance, and the future of policy. After, he learned how to code and use a variety of data and business intelligence tools.</p>
                                <p>As a result, he is now uniquely qualified to contribute to any project involving either or both sustainability and analytics.</p>
                                <Tabs defaultActiveKey="education" id="left-tabs" className="mb-3 small">
                                    <Tab eventKey="education" title="Education">
                                        <h5>Degree</h5>
                                        <p className="my-0"><strong>PhD Political Economy.</strong> 2020, King's College London (KCL)</p>
                                        <p className="my-0"><em> – with </em> <strong>Associateship of King’s College (AKC) (Ethics, Religion, Philosophy).</strong> 2021.</p>
                                        <p className="my-0"><strong>MA Environment Politics & Globalisation.</strong> 2012, KCL.</p>
                                        <p><strong>BA International Relations.</strong> 2010, Taltech.</p>
                                        <h5>Selected specialisations</h5>
                                        <p className="my-0"><strong>Data Warehousing for Business Intelligence.</strong> Univ. of Colorado, Coursera. 2022.</p>
                                        <p className="my-0"><strong>AI Product Management.</strong> Duke, Coursera. 2022.</p>
                                        <p className="my-0"><strong>Data Analytics.</strong> Google, Coursera. 2022.</p>
                                        <p className="my-0"><strong>Project Management.</strong> Google, Coursera. 2021.</p>
                                        <p className="my-0"><strong>Full Stack Web Development with React.</strong> HK Univ. of Sc. & Tech, Coursera. 2022.</p>
                                        <p className="my-0"><strong>Web Applications [Design].</strong> Univ. of Michigan, Coursera. 2021.</p>
                                        <p className="my-0"><strong>Web Design.</strong> Univ. of Michigan, Coursera. 2021.</p>
                                        <p className="my-0"><strong>Excel Data Analyics & Visualisation.</strong> Macquarie Univ, Coursera. 2022.</p>
                                        <p><strong>Excel VBA [Automation].</strong> Univ. of Colorado Boulder, Coursera. 2021.</p>
                                    </Tab>
                                    <Tab eventKey="experience" title="Experience">
                                        <h5>Present</h5>
                                        <p className="my-0"><strong>Founder.</strong> Polyzentrik</p>
                                        <h5>Past</h5>
                                        <p className="my-0"><strong>Post-Doctoral Research Fellow</strong>, <em>then</em> <strong>Research Associate.</strong> London School of Economics (LSE).</p>
                                        <p className="my-0"><strong>Assistant Lecturer.</strong> TU Dresden.</p>
                                        <p className="my-0"><strong>Research Assistant</strong>, <em>then</em> <strong>Teaching Assistant</strong>, <em>then</em> <strong>Research Fellow.</strong> King's College London (KCL).</p>
                                        <p className="my-0"><strong>Social Media Specialist.</strong> UNITEDPRINT.com SE.</p>
                                        <p><strong>Resource Planning Specialist.</strong> StarTek Inc.</p>
                                    </Tab>
                                </Tabs>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col md={4}>
                    <Card className="mb-2 mt-sm-2 mt-md-auto">
                        <Card.Body>
                            <Card.Title className="pzntrk my-3 border-bottom">Contact</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">An initial conversation is always free of charge.</Card.Subtitle>
                            <Card.Text className="linky text-end">
                                <ul>
                                    <li><a href="tel:+358449175354" target="_blank" rel="noreferrer" aria-label="Link to telephone number"><BsTelephoneFill /></a></li>
                                    <li><a href="mailto: hello@polyzentrik.com?SUBJECT=Hi!" target="_blank" rel="noreferrer" aria-label="Link to send email"><BsEnvelope /></a></li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="my-2">
                        <Card.Body>
                            <Card.Title className="pzntrk my-3 border-bottom">Social media</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Let's stay in touch via social media.</Card.Subtitle>
                            <Card.Text className="linky text-end">
                                <ul>
                                    <li><a href="https://www.linkedin.com/company/polyzentrik/" target="_blank" rel="noreferrer" aria-label="Link to Linkedin"><BsLinkedin /></a></li>
                                    <li><a href="https://github.com/polyzentrik" target="_blank" rel="noreferrer" aria-label="Link to GitHub"><BsGithub /></a></li>
                                </ul>
                                
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mb-2">
                        <Card.Body>
                            <Card.Title className="pzntrk my-3 border-bottom">Company details</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Polyzentrik is a company based in Finland.</Card.Subtitle>
                            <Card.Text className="small">
                                <p className="my-0"><strong>Company name.</strong> Polyzentrik Tmi.</p>
                                <p className="my-0"><strong>Business ID.</strong> 3331963-2.</p>
                                <p className="my-0"><strong>VAT Registry.</strong> FI33319632.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mt-2">
                    <Card className="mb-2 small">
                        <Card.Body>
                            <Card.Title className="pzntrk my-3 border-bottom">Additional credits</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Thanking external sources for making available resources that facilitated our work.</Card.Subtitle>
                            <Card.Text>
                                <p>All resources in this website are proprietary, available in the public domain, or under licenses which allow commercial use
                                without attribution. That said, we are grateful to the persons/organisations whose work facilitated ours.</p>
                                <p className="mb-0"><strong>Software</strong></p>
                                <ul>
                                    <li><a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">Gatsby</a>. This website is a Gatsby (React + GraphQL) implementation.</li>
                                </ul>
                                <p className="mb-0"><strong>Photography</strong></p>
                                <ul>
                                    <li><a href="https://evacristina.com/" target="_blank" rel="noreferrer">Eva Cristina</a>. The majority of photos on this website were kindly provided by Eva Cristina.</li>
                                    <li><a href="https://unsplash.com/" target="_blank" rel="noreferrer">Unsplash</a>. Some photos on this website come from Unsplash (<a href="https://unsplash.com/photos/dI7vfR1Bqcg" target="_blank" rel="noreferrer">Luke Richardson</a>).</li>
                                </ul>
                                <p className="mb-0"><strong>Graphics</strong></p>
                                <ul>
                                    <li><a href="https://freesvg.org/" target="_blank" rel="noreferrer">Free SVG</a>. The logos for non-AI services are based on SVGs graphics made freely available by FreeSVG.</li>
                                    <li><a href="https://huggingface.co/spaces/stabilityai/stable-diffusion" target="_blank" rel="noreferrer">Stable Diffusion</a>. The logos for AI services were generated with Stable Diffusion.</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Layout >
    )
}

export const Head = () => (
    <Seo title="Polyzentrik > About"
        description="Learn more about us and how to contact us." />
)

export default AboutPage
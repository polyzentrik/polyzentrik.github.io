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
            <h2 className="pzntrk">About</h2>
            <p className="big-p">Get to know Polyzentrik.</p>
            <Row className="about">
                <Col md={8}>
                    <Container className="card rounded bg-white">
                        <Row className="">
                        <h3 className="pzntrk mb-0 card-title px-2 py-2 checkers">Founder</h3>
                            <Col lg={3} className="linky text-center pt-3">
                                <StaticImage src="../images/with-suit.jpeg" alt="Photo of J" className="rounded" />
                                <ul className="text-end">
                                    <li><a href="https://www.linkedin.com/in/jbolns" target="_blank" rel="noreferrer" aria-label="Link to Linkedin"><BsLinkedin /></a></li>
                                    <li><a href="https://github.com/jbolns" target="_blank" rel="noreferrer" aria-label="Link to Linkedin"><BsGithub /></a></li>
                                    <li><a href="https://www.josebolanos.xyz/" target="_blank" rel="noreferrer" aria-label="Link to Linkedin"><BsHouseFill /></a></li>
                                </ul>
                            </Col>
                            <Col className="border-hidey pt-3 px-0 py-0 pb-2">
                                <Container className="px-3">
                                    <p>Polyzentrik is (currently) a private practice by Dr José A Bolanos.</p>
                                    <p>José studied and worked for a while in some of the top universities in the UK and Germany, on projects related to sustainability, private governance, and the future of policy. After, he learned how to code and use a variety of data and business intelligence tools.</p>
                                    <p>As a result, he is now uniquely qualified to contribute to any project involving either or both sustainability and analytics.</p>
                                    <Tabs defaultActiveKey="education" id="left-tabs" className="mb-3 small">
                                        <Tab eventKey="education" title="Education">
                                            <h3 className="small">Degree</h3>
                                            <p className="my-0"><strong>PhD Political Economy.</strong> 2020, King's College London (KCL)</p>
                                            <p className="my-0"><em> – with </em> <strong>Associateship of King’s College (AKC) (Ethics, Religion, Philosophy).</strong> 2021.</p>
                                            <p className="my-0"><strong>MA Environment Politics & Globalisation.</strong> 2012, KCL.</p>
                                            <p><strong>BA International Relations.</strong> 2010, Taltech.</p>
                                            <h3 className="small">Selected specialisations</h3>
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
                                            <h3 className="small">Present</h3>
                                            <p><strong>Founder.</strong> Polyzentrik</p>
                                            <h3 className="small">Past</h3>
                                            <p className="mb-0"><strong>Post-Doctoral Research Fellow</strong>, <em>then</em> <strong>Research Associate.</strong> London School of Economics (LSE).</p>
                                            <p className="mb-0"><strong>Assistant Lecturer.</strong> TU Dresden.</p>
                                            <p className="mb-0"><strong>Research Assistant</strong>, <em>then</em> <strong>Teaching Assistant</strong>, <em>then</em> <strong>Research Fellow.</strong> King's College London (KCL).</p>
                                        </Tab>
                                    </Tabs>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col md={4}>
                    <Card className="mt-sm-2 mt-md-auto">
                        <Card.Body className="px-0 pt-0">
                            <h3 className="px-2 pzntrk py-3 checkers small card-title">Contact</h3>
                            <Card.Subtitle className="px-3 my-3">An initial conversation is always free of charge.</Card.Subtitle>
                            <Card.Text className="px-3 linky text-end">
                                <ul>
                                    <li><a href="tel:+358449175354" target="_blank" rel="noreferrer" aria-label="Link to telephone number"><BsTelephoneFill /></a></li>
                                    <li><a href="mailto: hello@polyzentrik.com?SUBJECT=Hi!" target="_blank" rel="noreferrer" aria-label="Link to send email"><BsEnvelope /></a></li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body className="px-0 pt-0">
                            <h3 className="px-2 pzntrk py-3 checkers small card-title">Social media</h3>
                            <Card.Subtitle className="px-3 my-3">Let's stay in touch via social media.</Card.Subtitle>
                            <Card.Text className="px-3 linky text-end">
                                <ul>
                                    <li><a href="https://www.linkedin.com/company/polyzentrik/" target="_blank" rel="noreferrer" aria-label="Link to Linkedin"><BsLinkedin /></a></li>
                                    <li><a href="https://github.com/polyzentrik" target="_blank" rel="noreferrer" aria-label="Link to GitHub"><BsGithub /></a></li>
                                </ul>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body className="px-0 pt-0">
                            <h3 className="px-2 pzntrk py-3 checkers small card-title">Company details</h3>
                            <Card.Subtitle className="px-3 my-3">Polyzentrik is a company based in Finland.</Card.Subtitle>
                            <Card.Text className="px-3 small">
                                <p className="my-0"><strong>Company name.</strong> Polyzentrik Tmi.</p>
                                <p className="my-0"><strong>Business ID.</strong> 3331963-2.</p>
                                <p className="my-0"><strong>VAT Registry.</strong> FI33319632.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mt-2">
                    <Card>
                        <Card.Body className="px-0 pt-0">
                            <h3 className="px-2 pzntrk py-3 checkers small card-title">Additional credits</h3>
                            <Card.Subtitle className="px-3 my-3">All resources in this website are proprietary, available in the public domain, or under licenses which allow commercial use
                                    without attribution. That said, we are grateful to the persons/organisations whose work facilitated ours.</Card.Subtitle>
                            <Card.Text className="px-3">
                                <p className="mb-0"><strong>Software</strong></p>
                                <ul>
                                    <li><a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">Gatsby</a>. This website is a Gatsby (React + GraphQL) implementation.</li>
                                </ul>
                                <p className="mb-0"><strong>Photography</strong></p>
                                <ul>
                                    <li><a href="https://evacristina.com/" target="_blank" rel="noreferrer">Eva Cristina</a>. Home page photo kindly provided by Eva Cristina.</li>
                                </ul>
                                <p className="mb-0"><strong>Graphics</strong></p>
                                <ul>
                                    <li><a href="https://freesvg.org/" target="_blank" rel="noreferrer">Free SVG</a>. Some of this website's logos are based on SVGs graphics made freely available by FreeSVG.</li>
                                    <li><a href="https://huggingface.co/spaces/stabilityai/stable-diffusion" target="_blank" rel="noreferrer">Stable Diffusion</a>. Some of this website's logos were generated with Stable Diffusion.</li>
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
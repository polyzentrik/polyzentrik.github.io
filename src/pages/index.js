import React from "react"
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'
import ServicesComponent from '../components/services'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "../components/pretty.css"

const HomePage = ({ data }) => {
  const posts = data.allMdx.nodes.filter(node => node.frontmatter.type === "blog")

  return (
    <Layout pageTitle="Welcome">
      <Container fluid className="home-bar shadow text-center">
        <Row>
              <Col className="col-2 offset-3" data-sal="slide-up" data-sal-delay="400" data-sal-easing="ease">
                <h4>Our mission</h4>
                <p>To help individuals and SMEs access and use digital technologies, especially, but not exclusively, where it relates to sustainability.</p>
              </Col>
              <Col className="col-2" data-sal="slide-up" data-sal-delay="400" data-sal-easing="ease">
                <h4>Our method</h4>
                <p>We think modularly. We are developing small services and resources that solve concrete challenges and can combined into more complex solutions.</p>
              </Col>
              <Col className="col-2" data-sal="slide-up" data-sal-delay="400" data-sal-easing="ease">
                <h4>Our mindset</h4>
                <p>We lead by example. This page is fast and highly sustainable.
                  Don't take our word, ask <a href="https://pagespeed.web.dev/analysis/https-www-polyzentrik-com/hef1ww54o2?form_factor=desktop" target="_blank" rel="noopener noreferrer">Google's PageSpeed Insights</a> and
                  the <a href="https://www.websitecarbon.com/website/polyzentrik-com/" target="_blank" rel="noopener noreferrer">WCC</a>.</p>
              </Col>
        </Row>
      </Container>
      <Container fluid className="my-auto text-center home-blog-index special-bg shadow my-5 py-5">
        <Row className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2" >
          <Col lg={3} className="d-flex">
            <Container data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease">
              <h3 className="pzntrk">Latest from our blog</h3>
              <p className="word-breakie">We regularly publish fairly decent content about data, AI, and digital sustain&shy;ability.</p>
              <Link to={`/blog/`}>
                <Button variant="dark" className="big-p border w-100 mb-3">Go to blog</Button>
              </Link>
            </Container>
          </Col>
          <Col lg={9}>
            <Container>
              <Row className="d-flex">
                {
                  posts.map(node => (
                    <Col md={4} className="px-0 my-md-auto">
                      <article key={node.id}>
                        <Card className="m-1 shadow" data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
                          <Link to={`/${node.frontmatter.type}/${node.frontmatter.slug}`}>
                            <GatsbyImage image={getImage(node.frontmatter.hero_image)} alt="Placeholder image" data-sal="zoom-out" data-sal-delay="200" data-sal-easing="ease" />
                          </Link>
                          <Card.Body className="p-0" data-sal="zoom-out" data-sal-delay="200" data-sal-easing="ease">
                            <Card.Title className="p-2" data-sal="zoom-out" data-sal-delay="200" data-sal-easing="ease">
                              <h4 className="px-2 small"><Link to={`/${node.frontmatter.type}/${node.frontmatter.slug}`}> {node.frontmatter.title}</Link></h4>
                            </Card.Title>
                            <Card.Text className="p-3 checkers" data-sal="zoom-out" data-sal-delay="200" data-sal-easing="ease">
                              <p>{node.excerpt}</p>
                            </Card.Text>
                            <Link to={`/${node.frontmatter.type}/${node.frontmatter.slug}`}>
                              <Button variant="light" className="pink float-end mb-3 border mx-3" data-sal="zoom-out" data-sal-delay="200" data-sal-easing="ease">Read more...</Button>
                            </Link>
                          </Card.Body>
                        </Card>
                      </article>
                    </Col>
                  ))
                }
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <ServicesComponent />
    </Layout >
  )
}

export const query = graphql`
query {
  allMdx(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {type: {eq: "blog"}}}
    limit: 3) 
    {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        type
        slug
        categories
        author
        hero_image {
          childImageSharp {
            gatsbyImageData  (
              layout: FULL_WIDTH
              )
          }
        }
      }
      id
      excerpt
    }
  }
}
`

export const Head = () => (
  <Seo title="Polyzentrik > Home"
    description="Digital resources to help you at different stages of your sustainability journey." />
)

export default HomePage
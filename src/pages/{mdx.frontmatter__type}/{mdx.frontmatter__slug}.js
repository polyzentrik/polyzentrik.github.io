import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import ShareComponent from '../../components/share'
import Seo from '../../components/seo'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Post = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)

  return (
    <Layout pageTitle={data.mdx.frontmatter.type}>
      <Container className={data.mdx.frontmatter.type}>
        <Row className="my-2 d-flex border rounded bg-white">
          <Col lg={5} className="py-3 article-title">
            <h2 className="pzntrk my-0">{data.mdx.frontmatter.title}</h2>
            <p className="small text-center text-lg-end optional">By <a href={data.mdx.frontmatter.author_link} target="blank" rel="noreferrer">{data.mdx.frontmatter.author}</a>.</p>
            <span className="float-end border-top optional top-sm"><ShareComponent /></span>
          </Col>
          <Col sm={12} lg={6} className="border-1 border-start border-bottom py-3 align-self-end post-title optional"> 
            <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
            <p className="my-0 py-0 small text-end">Photo by <a href={data.mdx.frontmatter.hero_image_credit_link} target="blank" rel="noreferrer">{data.mdx.frontmatter.hero_image_credit_text}</a>.</p>
          </Col>
          <Col className="py-3 px-4 article-content">
            {children}
            <Container fluid className="border-1 border-top my-3">
              <span className="float-end"><ShareComponent /></span>
            </Container>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        type
        author
        author_link
        hero_image_alt
        hero_image_credit_text
        hero_image_credit_link
        hero_image {
          publicURL
          childImageSharp {
            gatsbyImageData (
              layout: FULL_WIDTH
              
              )
          }
        }
      }
    }
  }
`
export const Head = ({data}) => (
  <Seo title={data.mdx.frontmatter.title}
    image={data.mdx.frontmatter.hero_image.publicURL}
    description="Read more in our website." />
)

export default Post
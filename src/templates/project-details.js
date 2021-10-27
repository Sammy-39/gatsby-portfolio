import React from 'react'
import { graphql } from 'gatsby'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'

import Layout from '../components/Layout'  
import {details, featured, htmlCon} from '../styles/project-details.module.css'

const ProjectDetails = ({data}) =>{

    const {html} = data.markdownRemark
    const {title,stack,featuredImg} = data.markdownRemark.frontmatter

    return(
        <Layout>
            <div className={details}>
                <h2> {title} </h2>
                <h3> {stack} </h3>
                <div className={featured}>
                    <GatsbyImage image={getImage(featuredImg)} alt={title} />
                </div>
                <div className={htmlCon} dangerouslySetInnerHTML={{__html:html}} />
            </div>
        </Layout>
    )
}

export default ProjectDetails

export const query = graphql`
    query Project($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
        html
        frontmatter {
            stack
            title
            featuredImg {
                childImageSharp {
                  gatsbyImageData
                }
            }
        }
        }
    }
` 
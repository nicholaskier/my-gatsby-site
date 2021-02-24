import React from "react"
import Header from "../components/header"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import styles from "./index.module.css"

export default function Home({ data }) {
  return (
    <Layout>
        <br></br>
        <Header headerText={data.site.siteMetadata.title}/>
        <p>{data.allMarkdownRemark.totalCount} Posts</p>
        {data.allMarkdownRemark.edges.map(( {node}) => (
          <article key={node.id}>
            <Link to={node.fields.slug} className={styles.link}>
              <h3 className={styles.postTitle}>
                {node.frontmatter.title}
              </h3>
            <p className={styles.byline}><small>
              Written by: {node.frontmatter.author} on {node.frontmatter.date}
            </small></p>
            <p>{node.frontmatter.description}</p>
            </Link>
          </article>
        ))}

      
    </Layout>

  )
}

// static query for pages

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
      node {
        frontmatter {
          author
          date
          description
          title
        }
        fields {
          slug
        }
      }
    }
      totalCount
    }
  }
`

// any js or jsx files in this directory will correspond with browser views
// each is a react component to make a page

//  we use the link component vs an "A" tag to only refresh the component and not the entire page 

//  source plugins bring data into gatsby's data system
//  transfrormer plugins transform raw content brought in by source plugin


//  gatsby build
//  creates copy of public directory to deploy online
//  public directory is what gets deployed
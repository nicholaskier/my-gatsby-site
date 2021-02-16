import React from "react"
import Header from "../components/header"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Home({ data }) {
  return (
    <Layout>
        <br></br>
        <Header headerText={data.site.siteMetadata.title}/>
      
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
  }
`

// any js or jsx files in this directory will correspond with browser views
// each is a react component to make a page

//  we use the link component vs an "A" tag to only refresh the component and not the entire page 
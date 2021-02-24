import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"

const ComponentName = ({ data }) => { 
  return(
    <Layout>
      <Header headerText="my posts" />
      <table>
        <thead>
          <tr>
            <th>File Name</th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody>
          {data.allFile.edges.map(({ node }, index) => 
          <tr key={index}>
            <td>{node.name}</td>
            <td>{node.prettySize}</td>
          </tr>
          )}
        </tbody>
      </table>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </Layout>
  )
}

export const query = graphql`
  {
    allFile {
      edges {
        node {
          name
          prettySize
        }
      }
    }
  }
`

export default ComponentName
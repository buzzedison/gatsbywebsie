const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const blogPost = path.resolve("./src/templates/blogPost.js")
    resolve(
      graphql(
        `
          {
            allContentfulInsight
              
            {
              edges{
                node{
                  title
                  slug
                  image{
                    fluid{
                      src
                    }
                  }
                body{
                  childContentfulRichText{
                    html
                  }
                }
                }
              }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create pages for each markdown file.
        const post = result.data.ContentfulInsight.edges
        posts.forEach(({ node }) => {
          createPage({
            path: `/insight/${post.node.slug}/`,
            component: blogPost,
            // In your blog post template's graphql query, you can use path
            // as a GraphQL variable to query for data from the markdown file.
            context: {
              slug: post.node.slug,
            },
          })
        })
      })
    )
  })
}

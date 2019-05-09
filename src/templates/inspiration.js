const path = require("path")

function createInspirationPages(result, createPage) {
  const InspirationTemplate = path.join(
    __dirname,
    `../src/templates/inspiration.js`
  )
  const blogPosts = result.data.blogs.edges
  blogPosts.forEach((post, index) => {
    const previous =
      index === blogPosts.length - 1 ? null : blogPosts[index + 1].node
    const next = index === 0 ? null : blogPosts[index - 1].node
    createPage({
      path: post.node.fields.slug,
      component: InspirationTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

function graphqlForBlogs(graphql, createPage) {
  return graphql(`
    query($slug: String!) {
      contentfulTechnology(slug: { eq: $slug }) {
        title
        slug

        image {
          file {
            url
          }
        }

        body {
          childContentfulRichText {
            html
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    // Create blogPosts pages.
    createInspirationPages(result, createPage)
  })
}
exports.graphqlForBlogs = graphqlForBlogs

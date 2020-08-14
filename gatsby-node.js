const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      businesses: allIndustryDataJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.businesses.edges.forEach(({ node }) => {
    createPage({
      path: `industry/${node.slug}`,
      component: path.resolve("./src/templates/industry-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}

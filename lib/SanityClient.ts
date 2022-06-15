import sanity from "@sanity/client"

export default sanity({
  projectId: "6dn0z7pp",
  dataset: "production",
  apiVersion: "2021-08-31",
  useCdn: false,
})

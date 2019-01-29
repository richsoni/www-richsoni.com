export interface RemarkFrontmatter {}

export interface RemarkFields {
  basename: string,
  url: string,
  date?: string,
  notdate?: string,
}

export interface RemarkNode extends GatsbyNode {
  frontmatter: RemarkFrontmatter,
  fields: RemarkFields,
  html?: string,
  id: string,
}

export interface RemarkEdge {
  node: RemarkNode,
}

export interface GraphQLData {
  [key: string]: GatsbyNode
}

export interface GatsbyNode {
  id?: string,
}

export interface GatsbyEdge {
  node: GatsbyNode,
}

export interface AllMarkdownRemark {
  edges: RemarkEdge[]
}

export interface GraphQLQuery {
  data: GraphQLData,
}

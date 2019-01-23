export interface GraphQLNode {
  frontmatter?: SongFrontmatter,
  fields?: SongFields,
  id?: string,
  html?: string,
}

export interface GraphQLData {
  [key: string]: GraphQLNode
}

export interface GraphQLQuery {
  data: GraphQLData,
}

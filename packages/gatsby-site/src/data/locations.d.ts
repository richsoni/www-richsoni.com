import {
  RemarkFrontmatter,
  RemarkFields,
  RemarkNode,
  RemarkEdge,
  AllMarkdownRemark
} from './remark'

export interface LocationFields extends RemarkFields {
}

export interface LocationNode extends RemarkNode {
  fields: LocationFields,
  name: string,
  website: string,
  address: {
    region: string,
    locality: string,
    country: string,
  }
}

export interface LocationEdge extends RemarkEdge {
  node: LocationNode,
}

export interface Locations extends AllMarkdownRemark {
  edges: LocationEdge[]
}

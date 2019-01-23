import {
  RemarkFrontmatter,
  RemarkFields,
  RemarkNode,
  RemarkEdge,
  AllMarkdownRemark
} from './remark'

export interface EventFrontmatter extends RemarkFrontmatter {
  publish_notes: boolean,
  setlist: string[],
  links: {
    album: string,
  },
  startTime: string,
  type: string,
}

export interface EventNode extends RemarkNode {
  frontmatter: EventFrontmatter,
}

export interface EventEdge extends RemarkEdge {
  node: EventNode,
}

export interface Events extends AllMarkdownRemark {
  edges: EventEdge[]
}

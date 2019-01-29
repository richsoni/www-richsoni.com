import {
  RemarkFrontmatter,
  RemarkFields,
  RemarkNode,
  RemarkEdge,
  AllMarkdownRemark
} from './remark'

export interface SongFrontmatter extends RemarkFrontmatter {
  artists: string[],
  composed_at: string,
  title: string,
}

export interface SongNode extends RemarkNode {
  frontmatter: SongFrontmatter,
}

export interface SongEdge extends RemarkEdge {
  node: SongNode,
}

export interface Songs extends AllMarkdownRemark {
  edges: SongEdge[]
}

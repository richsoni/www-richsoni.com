import {
  RemarkFrontmatter,
  RemarkFields,
  RemarkNode,
  RemarkEdge,
  AllMarkdownRemark
} from './remark'

export interface AlbumFrontmatter extends RemarkFrontmatter {
  title?: string,
  released_on?: string,
  tracklist?: string[],
}

export interface AlbumNode extends RemarkNode {
  frontmatter: AlbumFrontmatter,
}

export interface AlbumEdge extends RemarkEdge {
  node: AlbumNode,
}

export interface Albums extends AllMarkdownRemark {
  edges: AlbumEdge[]
}

import { AllMarkdownRemark } from '../data/remark';
import { GatsbyNode } from '../data/remark';

export const eventsWithSetlist = (events: any) => {
  return events
    .edges
    .map((e: any) => e.node)
    .filter((e: any) => e.frontmatter.setlist)
}

export const eventsBySong = (events: any) => {
  return eventsWithSetlist(events)
  .reduce((memo: any, event: any) => {
    (event.frontmatter.setlist || []).map((song: any) => {
      if(!memo[song]) { memo[song] = [] }
      memo[song].push(event.fields.date)
    })
    return memo
  }, {})
}

export const eventsWithSong = (events: any, song: any) => {
  return events
    .edges
    .filter((event: any) => event.node.frontmatter.setlist)
    .filter((event: any) => event.node.frontmatter.setlist.includes(song))
}

export type NodesByBasename = {
  [key: string]: GatsbyNode
}

export const nodesByBasename = (collection: AllMarkdownRemark) => {
  return collection.edges.map((e) => e.node).reduce((memo: NodesByBasename, node) => {
    if(node && node.fields && node.fields.basename){
      return {...memo, [node.fields.basename]: node}
    } else {
      return memo;
    }
  }, {})
}

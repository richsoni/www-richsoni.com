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

export const nodesByBasename = (collection: any) => {
  return collection.edges.map((e: any) => e.node).reduce((memo: any, node: any) => {
    return {...memo,
      [node.fields.basename]: node,
    }
  }, {})
}

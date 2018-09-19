export const eventsWithSetlist = (events) => {
  return events
    .edges
    .map((e) => e.node)
    .filter((e) => e.frontmatter.setlist)
};

export const eventsBySong = (events, songs) => {
  return eventsWithSetlist(events)
  .reduce((songs, event) => {
    (event.frontmatter.setlist || []).map((song) => {
      if(!songs[song]) { songs[song] = [] }
      songs[song].push(event.fields.date)
    });
    return songs;
  }, {});
}

export const eventsWithSong = (events, song) => {
  return events
    .edges
    .filter((event) => event.node.frontmatter.setlist)
    .filter((event) => event.node.frontmatter.setlist.includes(song));
}

export const nodesByBasename = (collection) => {
  return collection.edges.map((e) => e.node).reduce((nodesByBasename, node) => {
    return {...nodesByBasename,
      [node.fields.basename]: node,
    };
  }, {})
};

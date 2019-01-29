const showsSelector = (state) => {
  return state.shows.byID || {}
}

export const showsWithSong = (state, song) => {
  const shows = showsSelector(state)
  const showsArray = Object.keys(shows).map((key) => shows[key])
  return showsArray.filter((item) => {
    return item.setlist && item.setlist.includes(song)
  }, [])
}

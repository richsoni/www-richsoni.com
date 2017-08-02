---
layout: default
---

<script>
  var Component = App.pages.songs
  if(Component){
    ReactDOM.render(React.createElement(Component, {
      songs: [{% for song in site.songs %}
        {
          url: {{ song.url | jsonify }},
          title: {{ song.title | jsonify }},
          composed_at: {{ song.composed_at | jsonify }},
        },
      {% endfor %}],
    }), document.body)
  }
</script>

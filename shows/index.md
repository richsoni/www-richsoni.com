---
layout: default
---

<script> 
  var Component = App.pages.shows
  if(Component){
    ReactDOM.render(React.createElement(Component, {
      shows: [{% for show in site.shows %}
        {
         date: {{ show.date | jsonify }},
         locationKey: {{ show.slug | jsonify }},
         startTime: {{ show.startTime | jsonify }},
         type: {{show.type | jsonify}},
         url: {{ show.url | jsonify }},
        },
      {% endfor %}],
      locations: {{ site.data.locations | jsonify }}
    }), document.body)
  }
</script>

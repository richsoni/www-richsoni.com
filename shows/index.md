---
layout: default
---

<script> 
  var Component = App.pages.shows
  if(Component){
    React.render(React.createElement(Component, {
      shows: [{% for show in site.shows %}
        {
         date: {{ show.date | jsonify }},
         locationKey: {{ show.locationKey | jsonify }},
        }
      {% endfor %}],
      locations: {{ site.data.locations | jsonify }}
    }), document.body)
  }
</script>

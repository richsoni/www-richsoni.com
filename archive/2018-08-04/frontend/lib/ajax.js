"use strict"
module.exports = {
  get: function(url, callback){
    let request = new XMLHttpRequest();
    request.open("GET", url, true)
    request.onreadystatechange = function () {
      if (request.readyState != 4 || request.status != 200) return; 
      let payload = request.responseText
      callback(payload)
    };
    request.send();
  }
}

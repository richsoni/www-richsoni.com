"use strict"
module.exports = function(collection, order){
  let objects = Object
    .keys(collection)
    .map((key) => key)
    .sort()
  if(order != "ASC"){ objects = objects.reverse() }

  return {
    collection: objects
      .map((item) => [item, collection[item]])
      .filter((item) => !item[1].attributes.depricated)
  }
}

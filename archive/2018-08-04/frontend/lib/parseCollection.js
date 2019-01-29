"use strict"
module.exports = function(collection, order){
  let items = collection
  if(order == "ASC"){ items = items.reverse() }

  return {
    collection: items
      .filter((item) => !item.depricated)
  }
}

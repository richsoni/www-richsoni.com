const sr = require("../data/sr")
const pr = require("../data/pr")
const releases = require("../data/releases")

function byId(arr){
  return arr.reduce((memo, item) => {
    memo[item.id] = item
    return memo
  })
}

module.exports = {
  sr: byId(sr),
  pr: byId(pr),
  releases: byId(releases),
}

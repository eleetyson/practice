// given two arrays as inputs, return the intersection as an array of all shared elements
// all elements in the returned array should be unique
// an empty array should be returned given arrays with no shared elements
function findIntersection(arr1, arr2) {
  let set = new Set(arr1)
  let filteredSet = new Set( arr2.filter(element => set.has(element)) )
  return [...filteredSet]
}

module.exports = findIntersection

// ALTERNATIVE SOLUTION
  // let intersection = {}
  //
  // for (let element of arr1) {
  //   if (arr2.indexOf(element) !== -1) {
  //     intersection[element] = 0
  //   }
  // }
  //
  // return Object.keys(intersection).map(k => parseInt(k))

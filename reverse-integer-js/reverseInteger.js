function reverse(int) {
  let reversedArr = Array.from(String(int), Number).reverse()
  let reversedInt = parseInt(reversedArr.join(''))
  return int >= 0 ? reversedInt : -reversedInt
}

module.exports = reverse

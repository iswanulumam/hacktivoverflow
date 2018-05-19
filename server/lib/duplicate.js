
const duplicate = function (array, value) {
  if (array.indexOf(value) != -1) {
    return true;
  }
  return false
}

module.exports = {
  duplicate
}
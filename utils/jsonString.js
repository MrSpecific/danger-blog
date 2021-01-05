const jsonString = function (value, spaces) {
// const jsonString = function (value) {
  // if (value instanceof nunjucks.runtime.SafeString) {
  //     value = value.toString()
  // }
  // const jsonString = JSON.stringify(value, null, spaces).replace(/</g, '\\u003c')
  // return nunjucks.runtime.markSafe(jsonString)
  // return `JSON? ${value}`;
  // value = value.toString()

  // const jsonString = JSON.stringify(value, null, spaces).replace(/</g, '\\u003c');
  const jsonString = JSON.stringify(value, null, spaces);

  return jsonString
}

module.exports = jsonString;

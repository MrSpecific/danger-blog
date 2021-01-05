const util = require('util');
const { format, formatISO } = require('date-fns');
const markdown = require('./markdown');
const jsonString = require('./jsonString');

module.exports = {
  format: format,
  formatISO: formatISO,
  jsonString: jsonString,

  log: (data) => console.log(`\n\n${util.inspect(data)}\n\n`),
  markdown: (content) => markdown.renderInline(content),
};

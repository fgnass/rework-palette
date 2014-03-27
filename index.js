var visit = require('rework-visit')

module.exports = exports = function(palette) {
  if (!palette) palette = exports.defaults
  return function(style) {
    var pattern = '\\b(' + Object.keys(palette).join('|') + ')\\b'
      , re = new RegExp(pattern, 'g')

    visit(style, function(declarations) {
      declarations.forEach(function(d) {
        if (!d.value) return;
        d.value = d.value.replace(re, function(name) {
          return palette[name]
        })
      })
    })
  }
}

exports.defaults = {
  aqua:    '#7fdbff',
  blue:    '#0074d9',
  navy:    '#001f3f',
  teal:    '#39cccc',
  green:   '#2ecc40',
  olive:   '#3d9970',
  lime:    '#01ff70',
  yellow:  '#ffdc00',
  orange:  '#ff851b',
  red:     '#ff4136',
  fuchsia: '#f012be',
  purple:  '#b10dc9',
  maroon:  '#85144b',
  silver:  '#ddd',
  gray:    '#aaa',
  black:   '#111'
}

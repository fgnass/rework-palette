var rework = require('rework')
  , palette = require('..')
  , read = require('fs').readFileSync

var input = read(__dirname + '/fixture/input.css', 'utf8')
  , expected = read(__dirname + '/fixture/expected.css', 'utf8').trim()

describe('palette', function() {

  it('should resolve color', function() {
    var css = rework(input)
      .use(palette())
      .toString().trim()

    css.should.equal(expected)
  })

})

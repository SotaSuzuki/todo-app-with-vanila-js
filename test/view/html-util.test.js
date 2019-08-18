const htmlUtil = require('../../src/view/html-util.js');
const assert = require('assert');

describe('htmlUtil#escapeSpecialChars', () => {
  it('escapes html special characters', () => {
    const html = '<div>Dog & Cat</div>'
    const expected = '&lt;div&gt;Dog &amp; Cat&lt;/div&gt;'
    assert.strictEqual(htmlUtil.escapeSpecialChars(html), expected);
  })
})

describe('htmlUtil#htmlToElement', () => {
  it('converts html to element', () => {
    assert(false)
  })
})
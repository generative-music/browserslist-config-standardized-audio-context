const { expect } = require('chai');
const browserslist = require('browserslist');
const config = require('./index.js');

describe('browserslist config', () => {
  it('should be a valid configuration', () => {
    expect(() => browserslist(config)).not.to.throw();
  });
});

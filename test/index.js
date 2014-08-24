'use strict';
var should = require('chai').should();
var twenty1 = require('../index.js');

describe('twenty1', function(){
  
  it('should convert any number into 21', function(){
    twenty1(151).should.equal(21);
  });

  it('should convert any string into 21', function(){
    twenty1("Sup bro").should.equal(21);
  });

  it('should convert any object into 21', function(){
    twenty1({}).should.equal(21);
  });

  it('should convert any function into 21', function(){
    twenty1(function(){}).should.equal(21);
  });

});


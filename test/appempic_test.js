'use strict';

var appempic = require('../');
var assert = require('should');

describe('appempic', function () {

  it('El nombre deberia ser ', function () {
    appempic.getName().should.equal('Julian');
  });
  it('El apellido deberia ser ', function () {
    appempic.getLastName().should.equal('Arango');
  });


});

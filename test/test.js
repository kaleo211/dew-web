var supertest = require('supertest');
var expect = require('chai').expect;

var server = require('../server');

describe('when visit website', function() {
  it('should return 200', function(done) {
    supertest(server)
      .get('/')
      .expect(200)
      .end(done());
  });
});

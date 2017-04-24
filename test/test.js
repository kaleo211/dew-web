var supertest = require('supertest');
var expect = require('chai').expect;

var server = supertest.agent("http://localhost:3000");

describe('when click the crash button', function() {
  it('should crash website', function(done) {
    server
      .get('/crash')
      .end(function(err, res) {
        expect(err.message).to.contain('ECONNREFUSED: Connection refused');
        done();
      });
  });
});

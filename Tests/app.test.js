const request = require('supertest')
const app = require('../Server/routes')

describe('GET /ping', function() {
    it('responds code 404', function(done) {
        request(app)
        .get('/ping')
        .expect(404)
        .end(done)
    })
  })

describe('GET /', function() {
    it('responds code 200', function(done) {
        request(app)
        .get('/')
        .expect(200)
        .expect("<b><i>Test</i></b> route<br>Hi Heroku")
        .end(done)
    })
  })

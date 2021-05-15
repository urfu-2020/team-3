const request = require('supertest')
import expressApp from "../Server/app";

describe('GET /ping', function() {
    it('responds code 404', function(done) {
        request(expressApp)
        .get('/ping')
        .expect(404)
        .end(done)
    })
  })

describe('GET /', function() {
    it('responds code 200', function(done) {
        request(expressApp)
        .get('/')
        .expect(200)
        .expect('<b><i>Test</i></b> route<br>Hi Heroku<br>Выполните вход в систему через  <a href="login">GitHub</a>')
        .end(done)
    })
  })

const {error404, testRoute} = require('./controllers/testController')

module.exports = app => {
    app.get('/', testRoute);
    app.all('*', error404)
};
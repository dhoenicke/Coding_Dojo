const JokeController = require('../controllers/jokes.controller')

module.exports = (app) => {
    app.get('/api/jokes', JokeController.showall)

    app.get('/api/jokes/:id', JokeController.readone)

    app.post('/api/jokes', JokeController.create)

    app.put('/api/jokes/:id', JokeController.update)

    app.delete('/api/jokes/:id', JokeController.delete)
};
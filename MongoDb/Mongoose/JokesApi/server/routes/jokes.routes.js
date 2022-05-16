const JokesController = require("../controllers/jokes.controllers");

module.exports = (app) => {
    app.get('/api/jokes', JokesController.findAllJokes);
    app.get('/api/jokes/:id', JokesController.findOneJoke);
    app.put('/api/jokes/:id', JokesController.updateJoke);
    app.post('/api/jokes', JokesController.createJoke);
    app.delete('/api/jokes/:id', JokesController.deleteJoke);
}
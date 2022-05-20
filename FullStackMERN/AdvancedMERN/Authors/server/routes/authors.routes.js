const AuthorController = require('../controllers/authors.controller')

/**
 * CRUD routes for Authors.
 * 
 * @param {Express} app 
 */
module.exports = (app) => {
    app.get('/api/authors', AuthorController.findAll);
    app.get('/api/authors/:id', AuthorController.getOne);
    app.post('/api/authors', AuthorController.create);
    app.put('/api/authors/:id', AuthorController.update);
    app.delete('/api/authors/:id', AuthorController.delete);
}
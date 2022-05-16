const express = require("express");
const app = express();

require('./server/config/mongoose.config');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const AllJokeRoutes = require('./server/routes/jokes.routes');
AllJokeRoutes(app);

const port = 8000;

app.listen(port, () => console.log(`Listening on port ${port}`));
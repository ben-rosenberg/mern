const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({ extended: true }));

const AllProductRoutes = require('./routes/products.routes');
AllProductRoutes(app);

const PORT = 8000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
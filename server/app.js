const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');
const authRoutes = require('./routes/authRoutes');
const queryRoutes = require('./routes/queryRoutes');

const app = express();

app.use(cors()); 
app.use(bodyParser.json()); 

app.use('/api/auth', authRoutes);
app.use('/api/query', queryRoutes);

app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;



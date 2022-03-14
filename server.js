const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

app.use(cors());
//Connect Database
connectDB();

//Init Middleware
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

//Define Routes
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/communities', require('./routes/api/communities'));
app.use('/api/sales', require('./routes/api/sales'));
app.use('/api/contact', require('./routes/api/contact'));
app.use('/api/subscribe', require('./routes/api/subscribe'));

const PORT = process.env.PORT || 5005;

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));

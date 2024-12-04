// microservices/user-service/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

// Conectar a MongoDB
mongoose.connect('mongodb://localhost/user-service', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Definir el esquema de usuario
const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String
});

const User = mongoose.model('User', UserSchema);

// Rutas
app.post('/users', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
});

app.get('/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.send(user);
});

app.listen(port, () => {
  console.log(`User service listening on port ${port}`);
});

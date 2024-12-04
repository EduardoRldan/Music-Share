const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/music-db', { useNewUrlParser: true, useUnifiedTopology: true });

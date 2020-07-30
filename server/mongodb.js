const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

mongoose.connect('mongodb+srv://HMS_Rahul:AttainU123@cluster0-sjhiu.mongodb.net/AttainU');

fs.readdirSync(path.join(__dirname, '/models')).forEach(file => {
  require('./models/' + file);
});
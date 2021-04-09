const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/vocal', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));

app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.set('port', process.env.PORT || 3000);


app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')}`);
})

// app.use(require('./routes/index'));
app.use(require('./routes/partido.routes'));

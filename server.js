const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const users = require('./models/users');
const {
  BASIC_CLIENT_URL,
  PORT
} = require('./config');
const { seedData } = require('./controller/seedAdmin');
const { seedUser } = require('./controller/seedUser');

const app = express();

connectDB();
seedData()
seedUser()

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
  origin: '*'
}));

app.get('/auth/signup/confirm/:id', async function(req, res){
  const { id } = req.params
  const user = await users.findById(id)
  user.isActive = true

  const saveduser = await user.save()
  res.redirect(`${BASIC_CLIENT_URL}/login`)
});

app.use('/auth', require('./routes/auth')); 
app.use('/user', require('./routes/user'));
app.use('/admin', require('./routes/admin'));
app.use('/contact', require('./routes/contact'));

const port = PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
var jwt = require('jsonwebtoken')

const app = express()
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

const port = 4000

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017'); // 30 seconds timeout


const Users = mongoose.model('Users', { username: String , password: String });

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/signup', (req, res) => {
  console.log(req.body)
  const username = req.body.username;
  const password = req.body.password
  const user = new Users({ username: username, password: password });
  user.save()
    .then(() => 
      {
        res.send({message: 'saved successfully'})
      } )
      .catch(() => {
        res.send({message: 'server err'})
      })
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  Users.findOne({ username: username })
      .then((result) => {
          if (!result) {
              res.send({ message: 'user not found.' })
          } else {
              if (result.password == password) {
                  const token = jwt.sign({
                      data: result
                  }, 'MYKEY', { expiresIn: '1h' });
                  res.send({ message: 'find success.', token: token, userId: result._id })
              }
              if (result.password != password) {
                  res.send({ message: 'password wrong.' })
              }

          }

      })
      .catch(() => {
          res.send({ message: 'server err' })
      })
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
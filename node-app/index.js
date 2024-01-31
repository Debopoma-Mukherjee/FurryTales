const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
var jwt = require('jsonwebtoken')
const multer = require('multer');
const path= require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })
const app = express()
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

const port = 4000

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017'); // 30 seconds timeout


const Users = mongoose.model('Users', { username: String , password: String });
const Pets = mongoose.model('Pets', {pname: String, pdesc: String , price: String, category: String , pimage: String})

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post('/add-pet', upload.single('pimage'), function (req, res) {
  console.log(req.file, req.body);
  const pname = req.body.pname;
  const pdesc = req.body.pdesc;
  const price = req.body.price;
  const category = req.body.category;
  const pimage = req.file.path;

  const pet = new Pets({pname: pname, pdesc: pdesc, price:price, category: category, pimage: pimage})
  pet.save()
    .then(() => {
      res.send({message: 'saved success'})
    })
    .catch(() => {
      res.send({message: 'server err'})
    })
  return;
});

app.get('/get-pets',(req,res) => {
  Pets.find()
    .then((result)=>{
      console.log(result, "user data")
      res.send({message:'success', pets: result})
    })
    .catch((err)=> {
      res.send({message: 'server err'})
    })
})


app.get('/get-pet/:id',(req,res) => {
  console.log(req.params);
  Pets.find()
    .then((result)=>{
      console.log(result, "user data")
      res.send({message:'success', pets: result})
    })
    .catch((err)=> {
      res.send({message: 'server err'})
    })
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
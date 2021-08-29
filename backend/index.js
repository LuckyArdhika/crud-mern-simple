let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let dbConfig = require('./database/db');
const createError = require('http-errors');

// Express Route
const studentRoute = require('../backend/routes/student.route');
// const bodyParser = require('body-parser'); has been deprecated

// // set ip adress
// var set_ip_address = require('set-ip-address')

// var eth0 = {
//   interface: 'eth0',
//   ip_address: '10.0.0.1',
//   prefix: 20,
//   gateway: '10.0.0.1',
//   nameservers: ['8.8.8.8'],
//   optional: true // (netplan) - dont wait for interfaces to avoid boot delay
// }

// var eth1 = {
//   interface: 'eth1',
//   dhcp: true
// }

// set_ip_address.configure([eth0, eth1]).then(() => console.log('done writing config files'));

// Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Database sucessfully connected!')
}).catch(err => {
    console.log('Could not connect to database : ' + err)
  })

const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/students', studentRoute)


// PORT
const port = process.env.PORT || 443;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// 404 Error
// app.use((req, res, next) => {
//   next(createError(400,'Something Went Wrong, please check our api documentation'));
// });

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
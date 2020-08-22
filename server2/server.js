const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const port = 3070;

// place holder for the data
const users = [{
  firstName: "from API v2",
  lastName: "from API v2",
  email: "from API v2"
}];

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));

app.get('/api2/users', (req, res) => {
  console.log('api/users called!')
  res.json(users);
});

app.post('/api2/user', (req, res) => {
  const user = req.body.user;
  console.log('Adding user:::::', user);
  users.push(user);
  res.json("user addedd");
});

app.get('/', (req,res) => {
  res.send(`<h1>API Running on the port ${port}</h1>`);
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
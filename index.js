const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3001; // Changed port to 3001

const users = [];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.post('/login', (req, res) => {
  const { username, password, petId } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.redirect(`/pet-details.html?petId=${petId}`);
  } else {
    res.status(401).send('Invalid credentials');
  }
});

app.post('/signup', (req, res) => {
  const { fullname, email, username, password, petId } = req.body;
  const user = { fullname, email, username, password };

  if (users.find(u => u.username === username)) {
    res.status(409).send('Username already exists');
  } else {
    users.push(user);
    res.redirect(`/pet-details.html?petId=${petId}`);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

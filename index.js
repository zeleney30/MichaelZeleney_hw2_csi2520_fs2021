const express = require("express");

const path = require("path");
const ejs = require("ejs");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + "/public"));

app.get('', (req, res) => {
  res.render('index');
})

app.get('/index', (req, res) => {
  res.render('index');
})

app.get('/blog', (req, res) => {
  res.render('blog');
})

app.get('/my_fun_facts', (req, res) => {
  res.render('my_fun_facts');
})

app.get('/my_resume', (req, res) => {
  res.render('my_resume');
})

app.get('/trivia', (req, res) => {
  res.render('trivia');
})



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
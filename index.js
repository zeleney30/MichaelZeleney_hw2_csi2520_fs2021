// npm install express
const express = require("express");

// other modules
const path = require("path");
const ejs = require("ejs");

// Initialize express framework
const app = express();

// Initialize Body Parser Middleware to parse data sent by users in the request object
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // to parse HTML form data

// Initialize Handlebar Middleware
app.set("views", "./views");
app.set('view engine', 'ejs');

/*app.get("/", (req, res) => {
  // by default it looks for .ejs files in the views folder
  res.render("index", { name: "Michael" });
});*/


app.get('', (req, res) => {
  //res.sendFile(__dirname + '/views/index.html');
  res.render('index');
})

app.get('/index', (req, res) => {
  //res.sendFile(__dirname + '/views/index.html');
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

// Start server on a PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
let http = require("http").Server(app);
let io = require("socket.io")(http);

io.on("connection", function (socket) {
  console.log("User connected with socket ID:", socket.id);
  socket.emit("data", "hna dir data ta3k");
});
app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/users", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  username: { type: String },
  password: { type: String },
});
const User = new mongoose.model("User", userSchema);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/register.html");
});
app.get("/login", function (req, res) {
  res.sendFile(__dirname + "/login.html");
});

app.post("/register", function (req, res) {
  let userName = req.body.username;
  let password = req.body.password;
  async function register(userName, password) {
    const result = await User.findOne({ username: userName }).exec();
    if (result) {
      console.log(result);
      console.log("User already excist!!!");
      res.redirect("/");
    } else {
      const user = new User({
        username: userName,
        password: password,
      });
      console.log("Creating the new user");
      user.save();
      res.sendFile(__dirname + "/main.html");
    }
  }
  register(userName, password);
});

app.post("/login", function (req, res) {
  let userName = req.body.username;
  let password = req.body.password;
  async function login(userName, password) {
    const result = await User.findOne({ username: userName }).exec();
    if (result) {
      console.log("username is right");
      if (result.password === password) {
        console.log("password is right");
        res.sendFile(__dirname + "/main.html");
      } else {
        console.log("password is wrong");
        res.redirect("/login");
      }
    } else {
      console.log("username is wrong");
      res.redirect("/login");
    }
  }
  login(userName, password);
});

http.listen(process.env.PORT || 3000, function () {
  console.log("server is running on port 3000");
});

const express = require("express");
const JWT = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.urlencoded());
app.use(cookieParser());

//function to verify Token

const verifyToken = (req, resp, next) => {
  const fetchedToken = req.cookies.token;

  if (!fetchedToken) {
    resp.redirect("/login");
  } else {
    JWT.verify(fetchedToken, "JavaScript", (error) => {
      if (error) {
        resp.redirect("/login");
      } else {
        next();
      }
    });
  }
};

app.get("/home", (req, resp) => {
  resp.render("Home.ejs");
});

app.get("/about", verifyToken, (req, resp) => {
  resp.render("About.ejs");
});

app.get("/contact", verifyToken, (req, resp) => {
  resp.render("Contact.ejs");
});

app.get("/login", (req, resp) => {
  resp.render("Login.ejs");
});

app.post("/login", (req, resp) => {
  const enteredUsername = req.body.Username;
  const enteredPassword = req.body.Password;

  //generate the token
  const jwtToken = JWT.sign(enteredUsername, "JavaScript");
  console.log(jwtToken);

  //token generated must me sent to the client
  resp.cookie("token", jwtToken);

  resp.redirect("/home");
});

app.listen(3000, () => {
  console.log("application is running !");
});

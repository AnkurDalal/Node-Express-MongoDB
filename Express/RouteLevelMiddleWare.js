const express = require("express");
const app = express();

const reqFilter = (req, resp, next) => {
  if (!req.query.name) {
    resp.send("Please Provide a UserName...");
  } else if (req.query.name === "Ankur") {
    resp.send("Entered Valid UserName!");
  } else {
    next();
  }
};
//app.use(reqFilter)
const route = express.Router();
route.use(reqFilter);

app.get("", (req, resp) => {
  resp.send("Home Page !");
});

app.get("/about", reqFilter, (req, resp) => {
  resp.send("About Page !");
});

app.get("/contact", (req, resp) => {
  resp.send("Contact us Page !");
});

route.get("/help", (req, resp) => {
  resp.send("Help Page !");
});

app.use("/", route);
app.listen(2000, () => {
  console.log("app is running on the port 2000 !");
});

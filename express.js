//!--------------------------------------- Cookies ------------------------------------------------------
/*
!we shou type in cmd or terminal ->"npm i cookie-parser"
https cookies are small pieces of data that is sent back from the server to the web browser which web brawser stores these cookies which allow subsequent requests made to the server to exchange the cookie for piece of information. cookies have an expiration date once expired the cookie will no longer be sent to the server whenever a request is made!
http is stateless. Every request made to the server from a client is independent from each other. So information about requests made prevously cannot be obtained during the current request. Thus, cookies exist. We use cookies to keep track of requests, activity from a user, maintaining logged in users, keeping track of items in a user`s shopping card.
!cookies live on the browser(client-side). 
*/

// const express = require("express");
// const cookieParser = require("cookie-parser"); //! we should call it

// const app = express();

// app.use(cookieParser()); //! it is built-in Middleware which we should call it in app.use()
// app.use(express.json());
// const port = 9999;

// function validateCookies(req, res, next){
//   const { cookies } = req;
//   console.log(cookies);
//   next()

// }

// app.get("/signin", validateCookies, (req, res) => {
//   res.cookie("session_id", "123");
//   res.status(200).json({msg: "logged in"})
// });

// app.listen(port, console.log(`https:://localhost:${port}`));

//! ---------------------------------- Udemy Backend(Lesson9) --------------------------------------------
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const users = require("./Routes/users");
const posts = require("./Routes/posts");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(users);
app.use(posts);

app.use("/login", (req, res, next) => {
  res.send(
    `<form action="/user" method="POST"><input type="text" name="name"><button type="submit">submit</button></form>`
  );
});

app.listen(9000, console.log(9000));

// const cars = [
//   { model: "x5", brand: "BMW", engine: 5 },
//   { model: "model s", brand: "Tesla", engine: 8 },
//   { model: "Gentra", brand: "Ravon", engine: 1.5 },
//   { model: "Malibu", brand: "GM", engine: 3 },
//   { model: "222", brand: "mercedes", engine: 6 },
// ];

// const carsArr = [];
//!-------------------------------------------- for() -----------------------------------------------------
// for (let i = 0; i < cars.length; i++) {
//   carsArr.push(cars[i].model);
// }

// console.log(carsArr);

//!--------------------------------------------- map() ----------------------------------------------------
/*
in Higher order Function --> har doim Aarray qaytaradi! map()ni ichiga shart yozsak shartimizni qanoatlantirgan qiymatlarni ko`rsatib lekin shartni qanoatlantirmagan qiymatlarni ham undefined ko`rinishda yangi arrayga qo`shib qaytaradi! 
*/

// const carsArr = cars.map((c) => c.brand);  //! code 1 qator bo`lsa "{}" va "return" so`zi shart emas!

// const carsArr = cars.map((car) => {
//   return car.brand; //! "{}" kodimiz ko`p qatordan iborat bo`lganda ishlatiladi va "{}" ichida "return" bo`lishi shart!
// });

// console.log(carsArr);

//!-------------------------------- reduce() --> qiymat qaytaradi! ----------------------------------------
// hozirgi misolimizda cars arrayi ichidagi enginelani yig`indisini xisoblab qaytarvotti!

// const engineSum = cars.reduce((counter, car) => {
//   return (counter += car.engine);
// }, 0); //!--> Arrayni ichidagi obyectlar uchun reduce() ishlatganimizda 0 qoyishimiz kerak!

// console.log(engineSum);

//!--------------------------------------------- for() ----------------------------------------------------

// const carsArr = [];

// for (let i = 0; i < cars.length; i++) {
//   if (cars[i].engine >= 5) {
//     carsArr.push(cars[i]);
//   }
// }

// console.log(carsArr);

//!------------------------------------ forEach() hech narsa qaytarmaydi ----------------------------------

// const carsArr = [];

// const carsEngine = cars.forEach((car) => {
//   if (car.engine >= 4) {
//     carsArr.push(car);
//   }
// });

// console.log(carsEngine); //! undefined (chunki forEach() hech narsa qaytarmaydi)

// console.log(carsArr);

//! --------------------------------------- filter() ------------------------------------------------------
/*
filter() array.filter() arraydagi elementini aylanib call back funksiyasida berishimiz majburiy bo`lgan shartni qanoatlantirganini yangi arrayga push qilib qaytaradi!
*/
// const carEngine = cars.filter((car) => {
//   return car.engine > 2;
// });

// console.log(carEngine);

//!-------------------------------------- join() ---------------------------------------------------------
/*
join() The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
*/
// const a = ["wind", "water", "fire"];

// console.log(a.join()); //wind,water,fire
// console.log(a.join(" , ")); // wind , water , fire
// console.log(a.join(" + ")); //wind + water + fire
// console.log(a.join("")); // windwaterfire

// const http = require("http");
// const express = require("express");
// const app = express();
// app.use((req, res, next) => {
//   console.log("first express use");
// });

// const server = http.createServer(app);

// const express = require("express");
// const app = express();
// const port = 8000;

// app.listen(port, () => {
//   console.log(`your port${port} is running on https://localhost:${port}`);
// });

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
app.use(bodyParser.urlencoded());
app.use(express.json());

app.use("/login", (req, res, next) => {
  console.log("hi");

  res.send(
    `<form action="/user" method="POST"><input type="text" name="title"><button type="submit">submit</button></form>`
  );
});

app.use("/user", (req, res, next) => {
  console.log(req.body);

  res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log("I`m from '/' part");
  res.send(`<h1>u are a user</h1>`);
});

app.listen(9000, console.log(9000));

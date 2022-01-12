// const http = require("http");
// const express = require("express");
// const app = express();
// app.use((req, res, next) => {
//   console.log("first express use");
// });

// const server = http.createServer(app);

// server.listen(3000, console.log(3000));

const car = [
  { model: "x5", brand: "BMW", engine: "5" },
  { model: "model s", brand: "Tesla", engine: "8" },
  { model: "Gentra", brand: "Ravon", engine: "1.5" },
  { model: "Malibu", brand: "GM", engine: "3" },
  { model: "222", brand: "mercedes", engine: "4" },
];

// const carsArr = [];

// for (let i = 0; i < car.length; i++) {
//   carsArr.push(car[i].model);
// }

// console.log(carsArr);

//! map() in Higher order Function
const carsArr = car.map((c) => c.brand);

console.log(carsArr);

require("dotenv").config();
const express = require("express");

const db = require("./db");

const app = express();

app.post("/clients", (request, response) => {
    const customer = request.body;
    db.insertCustomer(customer);
    response.sendStatus(201);
});

app.get("/clients/:id", (request, response) => {
  const id = parseInt(request.params.id);
  response.json(db.selectCustomer(id));
});

app.get("/clients", (request, response) => {
  response.json(db.selectCustomers());
});

app.get("/", (request, response, next) => {
  response.json({
    message: "It's alive!",
  });
});

app.listen(process.env.PORT, () => {
  console.log("App is runnig!");
});

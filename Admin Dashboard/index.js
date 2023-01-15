// Import Express & neDB
const express = require("express");
const Datastore = require("nedb");
const app = express();

app.listen(3000, () => console.log("Listening at port 3000."));
app.use(express.static("public"));

// DB Initialization & loads
const products_db = new Datastore("./databases/products.db");
const customers_db = new Datastore("./databases/customers.db");
const orders_db = new Datastore("./databases/orders.db");
const browser_visits_db = new Datastore("./databases/browser_visits.db");
const country_visits_db = new Datastore("./databases/country_visits.db");
products_db.loadDatabase();
customers_db.loadDatabase();
orders_db.loadDatabase();
browser_visits_db.loadDatabase();
country_visits_db.loadDatabase();

app.get("/api", (request, response) => {
  products_db.find({}, (err, data) => {
    if (err) {
      response.end();
      return;
    }
    response.json(data);
  });
});

app.get("/api2", (request, response) => {
  customers_db.find({}, (err, data) => {
    if (err) {
      response.end();
      return;
    }
    response.json(data);
  });
});

app.get("/api3", (request, response) => {
  orders_db.find({}, (err, data) => {
    if (err) {
      response.end();
      return;
    }

    response.json(data);
  });
});

app.get("/api4", (request, response) => {
  browser_visits_db.find({}, (err, data) => {
    if (err) {
      response.end();
      return;
    }

    response.json(data);
  });
});

app.get("/api5", (request, response) => {
  country_visits_db.find({}, (err, data) => {
    if (err) {
      response.end();
      return;
    }

    response.json(data);
  });
});

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

app.listen(3000, () => console.log("Server running"));

app.get("/users", (req, res) => {
    res.json({ route: "/users", status: "ok" });
  });
  
  app.get("/products", (req, res) => {
    res.json({ route: "/products", status: "ok" });
  });
  
  app.get("/orders", (req, res) => {
    res.json({ route: "/orders", status: "ok" });
  });
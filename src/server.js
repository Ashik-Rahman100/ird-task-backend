// Create express app
const express = require("express");
const app = express();
const db = require("./database.js");
const cors = require('cors')
// Server port
const HTTP_PORT = 8000;
app.use(cors({origin:"*"}))

// Start server
app.listen(HTTP_PORT, () => {
  console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT));
});
// Root endpoint
app.get("/", (req, res, next) => {
  res.json({ message: "Ok" });
});

// Get All Category
app.get("/api/category", (req, res, next) => {
  const sql = "select * from category";
  const params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

// Get Category by Id
app.get("/api/category/:name", (req, res, next) => {
  const sql = "select * from category where cat_name_en = ?";
  const params = [req.params.name];
  db.get(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: row,
    });
  });
});

// Get All Sub Category
app.get("/api/sub_category", (req, res, next) => {
  const sql = "select * from sub_category";
  const params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

// Get Sub Category by Id
app.get("/api/sub_category/:id", (req, res, next) => {
  const sql = "select * from sub_category where id = ?";
  const params = [req.params.id];
  db.get(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: row,
    });
  });
});

// Get All Dua
app.get("/api/dua", (req, res, next) => {
  const sql = "select * from dua";
  const params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

// Get Dua by Id
app.get("/api/dua/:id", (req, res, next) => {
  const sql = "select * from dua where id = ?";
  const params = [req.params.id];
  db.get(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: row,
    });
  });
});

// Default response for any other request
app.use(function (req, res) {
  res.status(404);
});

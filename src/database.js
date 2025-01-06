// var sqlite3 = require("sqlite3").verbose();
// var md5 = require("md5");

// const DBSOURCE = "dua_main.sqlite";

// let db = new sqlite3.Database(DBSOURCE, (err) => {
//   if (err) {
//     // Cannot open database
//     console.error(err.message);
//     throw err;
//   } else {
//     console.log("Connected to the SQLite database.");
//   }
// });

// module.exports = db;


const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Resolve the absolute path to the database file
const dbPath = process.env.DATABASE_PATH || path.join(__dirname, 'dua_main.sqlite');

// Initialize SQLite database
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
    process.exit(1); // Exit process on error
  } else {
    console.log('Connected to the SQLite database.');
  }
});

module.exports = db;
var mysql = require("mysql");
var connection;

var gotJaws = false;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
  gotJaws = true;
} else {

  connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "burgers_db"
  });
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
  console.log("JAWSDB_URL: " + process.env.JAWSDB_URL);
  console.log("got jaws: " + gotJaws);
});

module.exports = connection;

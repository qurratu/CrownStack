var express = require("express");
var app = express();
var cors = require('cors')
var mysql      = require('mysql');
app.use(cors())
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'crownStack'
});
connection.connect();

app.get("/api/currency", cors(),(req, res, next) => {
    connection.query('select * from currency', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);

        res.json(results);
      });
});

app.listen(8000, () => {
 console.log("Server running on port 8000");
});
// connection.end();
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection (
{
  host: "localhost",
  port: 8080,

  user: "root",
  password: "root",

  database: "bamazon"
});

connection.connect(function(err) {
    if (err) {
        throw err}
    
    new Promise(function(req, res) {
        connection.query("SELECT * FROM products", function(err, res) {
            if (err) req(err);
            res(res);
        });
    }).then(function(result) {
        result.forEach(function(item) {
            numberOfProductTypes++;
            console.log("Item Id: " + item.item_id + " || Product Name: " + item.product_name + " || Price: " + item.price);

        });
    });
});  
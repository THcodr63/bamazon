var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection (
{
  host: "localhost",
  port: 3030,

  user: "root",

  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    
    new Promise(function(resolve, reject) {
        connection.query('SELECT * FROM products', function(err, res) {
            if (err) reject(err);
            resolve(res);
        });
    }).then(function(result) {
        result.forEach(function(item) {
            numberOfProductTypes++;
            console.log("Item Id: " + item.item_id + " || Product Name: " + item.product_name + " || Price: " + item.price);
    });
},
}),
function runProduct() {
  inquirer.prompt (
    {
      name: "item_id",
      type: "list",
      message: "What is the ID of the item you would like to buy?",
      choices: [
        "0568",
        "1353",
        "4252",
        "4519",
        "4668",
        "4696",
        "5822",
        "6932",
        "7521",
        "8628"
      ],
     validate: function(value) {
            if ((isNaN(value) === false) && (value <= numberOfProductTypes)) {
                return true;
            } else {
                console.log('\nPlease enter a valid ID.');
                return false;
            }
        }
    },
    {
        name: "stock_quantity",
        type: "input",
        message: "How many units of the product would you like to buy?",        
            
        validate: function(value) {
            if (isNaN(value) === false) {
                return true;
            } else {
                console.log('\nPlease enter a valid quantity.');
                return false;
            }
    },
        // Hmmmmmm.... Need to figure out how the list works with the validators....
    });
}

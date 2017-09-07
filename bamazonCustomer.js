var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection (
{
  host: "localhost",
  port: 3030,

  user: "root",
  password: "root",

  database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Success");
    tableStuff();
})

var tableStuff = function() {
    connection.query("SELECT * FROM products", function(err, res) {
        for(var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " || " + res[i].product_name + " || " + res[i].department_name + " || " + res[i].price + " || " + res[i].stock_quantity);
        }
        promptCustomer(res);
    })

}
    
var promptCustomer = function(res) {
    inquirer.prompt ([{
        type: "input",
        name: "Choice",
        message: "What product would you like to purchase?"
    }]).then(function(answer) {
        var correct = false;
        for(var i = 0; i < res.length; i++) {
            if(res[i].product_name === answer.choice) {
                correct === true;
                var product = answer.choice;
                var id = i;
            }
        }
    })
}
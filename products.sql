drop database if exists bamazon;

create database bamazon;

use bamazon;

create table products (
	item_id integer(11) auto_increment not null,
    product_name varchar(25) not null,
    department_name varchar(20) not null,
    price decimal(10,3) not null,
    stock_quantity integer(11) not null,
    primary key (item_id)
);

insert into products (item_id, product_name, department_name, price, stock_quantity)
values (5822, "Moose Plushie", "Toys", 24.99, 4);

insert into products (item_id, product_name, department_name, price, stock_quantity)
values (6932, "Disney AIW Mug", "Kitchen", 3.99, 5);

insert into products (item_id, product_name, department_name, price, stock_quantity)
values (0568, "Neko to Watashi - manga", "Books", 4.00, 12); 

insert into products (item_id, product_name, department_name, price, stock_quantity)
values (7521, "Cabo Wine", "Alcohol", 10.99, 50);

insert into products (item_id, product_name, department_name, price, stock_quantity)
values (4519, "CardCaptor Dress", "Cosplay/Costumes", 75.00, 3);

insert into products (item_id, product_name, department_name, price, stock_quantity)
values (4252, "Lightsaber Chopsticks", "Kitchen", 11.99, 16);

insert into products (item_id, product_name, department_name, price, stock_quantity)
values (8628, "Honto Yajuu - manga", "Books", 5.81, 8);

insert into products (item_id, product_name, department_name, price, stock_quantity)
values (1353, "Funko Pop! AvsED Pablo", "Toys", 10.00, 13);

insert into products (item_id, product_name, department_name, price, stock_quantity)
values (4668, "Fireball Cinnamon Whiskey", "Alcohol", 13.99, 35);

insert into products (item_id, product_name, department_name, price, stock_quantity)
values (4696, "Uraboku - manga", "Books", 5.60, 18);

select * From products;
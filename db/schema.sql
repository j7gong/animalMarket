-- Before running the application, we need to create the db in local;
-- DROP DATABASE
DROP DATABASE IF EXISTS foodprint_db;

-- CREATE DATABASE
CREATE DATABASE foodprint_db;

-- After install and start this application, we need to run the following query in local mysql.
-- Add animal data to the animal market;
INSERT INTO animal(animal_name, sell_price, buy_price)
VALUES ('Cow', 2000,500),('Goat', 400, 100),('Chicken', 50, 10),('Fish', 10, 2);

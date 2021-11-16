DROP DATABASE IF EXISTS dayspaw_db;
<<<<<<< HEAD
CREATE DATABASE dayspaw_db;

USE dayspaw_db;

CREATE TABLE customer (
    customer_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    customer_first_name VARCHAR(30) NOT NULL,
    customer_last_name VARCHAR(30) NOT NULL
    customer_phone INT (11) NOT NULL,
    customer_email VARCHAR (50) NOT NULL
);

CREATE TABLE dog (
    dog_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dog_name VARCHAR(30) NOT NULL,
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES customer(customer_id)
    ON DELETE SET NULL
);

CREATE TABLE appointment (
    appointment_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    appointment_drop_date_time DATETIME,
    appointment_pick_date_time DATETIME,
    dog_id INT,
    FOREIGN KEY (dog_id) REFERENCES dog(dog_id)
    ON DELETE SET NULL
);
=======
CREATE DATABASE dayspaw_db;
>>>>>>> main

USE dayspaw_db;

INSERT INTO customer (customer_first_name, customer_last_name, customer_phone, customer_email)
VALUES ("Mike", "Mallon", 18471234567, "mallon127@gmail.com"),
       ("Charlie", "Hernandez", 12141234567, "charlesH4758@gmail.com")

INSERT INTO dog (dog_name, customer_id)
VALUES ("Simba", 1),
       ("Oreo", 2)

INSERT INTO appointment (appointment_drop_date_time, appointment_pick_date_time, dog_id)
VALUES ("2021-12-16 10:00:00", "2021-12-16 15:00:00", 1),
       ("2021-12-17 13:00:00", "2021-12-17 16:00:00", 2)
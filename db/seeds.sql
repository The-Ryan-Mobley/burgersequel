USE burgers_db;
TRUNCATE burgers_db.burgers;
INSERT INTO burgers_db.burgers (burger_name,author,eaten)
VALUES ('Cheese Burger','Ryan Mobley',false),('Bacon Cheese Burger','Lazy Foo',false),('Double Cheese Burger',"Burge Burgeson",false),
('Bacon Bleu Burger',"steve",false);
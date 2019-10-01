USE burgers_db;
TRUNCATE burgers_db.burgers;
INSERT INTO burgers_db.burgers (burger_name,author,eaten)
VALUES ('Cheese_Burger','Ryan_Mobley',false),('Bacon_Cheese Burger','Lazy_Foo',false),('Double_Cheese_Burger',"Burge_Burgeson",false),
('Bacon_Bleu_Burger',"steve",false);
const express = require('express');
const handlebar = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 1337;
const db = require("./models");

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", handlebar({ defaultLayout: "main" })); //set up handlebars
app.set("view engine", "handlebars");


require('./routing/apiRoutes')(app);
require('./routing/clientRoutes')(app);



// Start our server so that it can begin listening to client requests.
//db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
 //});
var db = require("../models");

module.exports = function(app) {
  app.get("/", function(req, res) {
    db.Burger.findAll({
    }).then(function(allBurgers) {
      console.log("all burgers: " + allBurgers);
      res.render("index", allBurgers);

    })
    .catch(function(err) {
        res.status(500).json(err);
      });
  });

  app.post("/api/burgers", function(req, res) {
    db.Burger.create(req.body)
    .then(function(newBurger) {
      res.json(newBurger);
    })
    .catch(function(err) {
        res.status(500).json(err);
    });
  });

  // PUT route for updating burgers. We can get the updated burger data from req.body
  app.put("/api/burgers/:id", function(req, res) {
    // Use the sequelize update method to update a todo to be equal to the value of req.body
    // req.body will contain the id of the todo we need to update
    db.Burger.update({
      devoured: true
    },
    {
      where: {
        id: req.params.id
      }
    
    }).then(function(updatedBurger) {
      res.json(updatedBurger);
    })
    .catch(function(err) {
      res.status(500).json(err);
    });
  });
};


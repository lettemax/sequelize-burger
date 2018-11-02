// // Import the ORM to create functions that will interact with the database.
// var orm = require("../config/orm.js");

// var burger = {
//   selectAll: function(cb) {
//     orm.selectAll(function(res) {
//       cb(res);
//     });
//   },
//   insertOne: function(burger_name, cb) {
//     orm.insertOne(burger_name, function(res) {
//       cb(res);
//     });
//   },
//   updateOne: function(id, cb) {
//     orm.updateOne(id, function(res) {
//       cb(res);
//     });
//   }
// }

// // Export the database functions for the controller (catsController.js).
// module.exports = burger;


module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });

  // Burger.associate = function(models) {
  //   // We're saying that a Post should belong to an Author
  //   // A Post can't be created without an Author due to the foreign key constraint
  //   Burger.belongsTo(models.Customer, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Burger;
};

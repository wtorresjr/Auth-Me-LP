"use strict";
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = "Users";
    return queryInterface.bulkCreate(options, [
      {
        email: "demo@user.io",
        username: "Demo-lition",
        hashedPassword: bcrypt.hashSync("password"),
        firstName: "FakeFirst1",
        lastName: "FakeLast1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "user1@user.io",
        username: "FakeUser1",
        hashedPassword: bcrypt.hashSync("password2"),
        firstName: "FakeFirst2",
        lastName: "FakeLast2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "user2@user.io",
        username: "FakeUser2",
        hashedPassword: bcrypt.hashSync("password3"),
        firstName: "FakeFirst3",
        lastName: "FakeLast3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = "Users";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        username: { [Op.in]: ["Demo-lition", "FakeUser1", "FakeUser2"] },
      },
      {}
    );
  },
};

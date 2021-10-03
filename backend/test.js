const { User } = require("./config/database");

(async function () {
  const user = await User.create({
    username: "davodu33",
    email: "davo@gmail.io",
    password: "toto",
  });

  console.log(user);
})();

// (async function () {
//   const user = await User.create({
//     username: "thibzdu64",
//     email: "tibo@gmail.io",
//     password: "tototo",
//   });

//   console.log(user);
// })();

// (async function () {
//   const users = await User.findAll();
//   console.log(users);
// })();

// (async function () {
//   const users = await User.findByPk(1);
//   console.log(users);
// })();

// (async function () {
//   const users = await User.findAll({ where: { username: "Michel" } });
//   console.log(users);
// })();

// (async function () {
//   const user = await User.findOne({ where: { username: "Michel" } });
//   console.log(user);
// })();

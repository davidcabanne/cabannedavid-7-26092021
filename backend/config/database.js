// Connection à MySQL par le terminal
// MYSQL_PWD=yourpassword mysql -u root

const { Sequelize, DataTypes } = require("sequelize");

const dotEnv = require("dotenv").config({ path: "./config/.env" });

const sequelize = new Sequelize(process.env.DB_HOST, {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  dialect: "mysql",
});

const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  picture: {
    type: DataTypes.STRING,
  },
  bio: {
    type: DataTypes.STRING,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
  },
});

const Post = sequelize.define("Post", {
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
  },
});

const Comment = sequelize.define("Comment", {
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

const Like = sequelize.define("Like", {});

User.hasMany(Post);
Post.belongsTo(User);

User.hasMany(Comment);
Comment.belongsTo(User);

Post.hasMany(Comment);
Comment.belongsTo(Post);

Post.hasMany(Like);
Like.belongsTo(Post);

User.hasMany(Like);
Like.belongsTo(User);

module.exports = { sequelize, User, Post, Comment, Like };

// module.exports = sequelize;

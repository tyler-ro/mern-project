const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// const uuid = require("uuid");
// const S3 = require("react-aws-s3")
let aws = require('aws-sdk')

// aws.config.update({accessKeyId: "AKIAUYOEP5OLEHW6ZUMN", secretAccessKey: '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'})
// var s3bucket = new aws.S3({ params: { Bucket: "ga-chatterbox"}})

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.json(token);
  } catch (error) {
    res.status(400).json(error);
  }
}


async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    // timer for when user automatically logs out
    const token = createJWT(user);
    res.json(token);
  } catch (error) {
    res.status(400).json("Bad Credentials");
  }
}

// where is the getAllUsers being called from

// set up axios call

async function getAllUsers(req, res) {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(error);
  }
}

//create prop for users

module.exports = {
  create,
  login,
  checkToken,
  getAllUsers,
};

//keep, but doesn't do anything...
function checkToken(req, res) {
  console.log("req.user -->", req.user);
  res.json(req.exp);
}

//getUser
//getAllUsers

//Helper Functions

function createJWT(user) {
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
}

module.exports = {
  create,
  login,
  update:updateUser,
  uploadPicture,
  checkToken,
};

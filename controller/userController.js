const userModel = require("../db/userModel");
const { error, success } = require("../utils/handler");
const bcrypt = require("bcrypt");

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.send(error(400, "Email and password Required!!"));
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.send(error(401, "User Not Found!! Please Sign Up"));
    }

    // Compare the hashed password with the entered password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.send(error(401, "Invalid password!"));
    }

    return res.send(success(201, user));
  } catch (err) {
    return res.send(error(401, err.message));
  }
};

const signupController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.send(error(401, "Enter Every Field!!!"));
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
      username,
      email,
      password: hashedPassword,
    });

    return res.send(success(201, "User is created"));
  } catch (err) {
    return res.send(error(401, err.message));
  }
};

const logoutController = async (req, res) => {
  // Handle logout logic (e.g., clear session or token)
};

module.exports = {
  loginController,
  logoutController,
  signupController,
};

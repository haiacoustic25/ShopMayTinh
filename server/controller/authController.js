const User = require("../models/User");

class AuthController {
  //@ POST register
  // @desc /auth/register
  async register(req, res) {
    const {
      firstName,
      lastName,
      phoneNumber,
      username,
      password,
      avatar,
      admin,
    } = req.body;
    // check missing information
    if (!firstName || !lastName || !phoneNumber || !username || !password)
      return res
        .status(200)
        .json({ success: false, message: "Missing information" });

    try {
      // Check for username
      const user = await User.findOne({ username });
      if (user)
        return res
          .status(204)
          .json({ success: false, message: "Username already taken" });
      const newUser = new User({
        firstName,
        lastName,
        phoneNumber,
        username,
        password,
        avatar,
        admin: admin || false,
      });

      newUser.save();

      res.json({ success: true, message: "Register success", user: newUser });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  }

  //   @ POST /auth/login
  async login(req, res) {
    const { username, password } = req.body;
    if (!username || !password)
      return res
        .status(201)
        .json({ success: false, message: "Missing username or password" });

    try {
      // check for username
      const user = await User.findOne({ username });
      if (!user)
        return res
          .status(200)
          .json({ success: false, message: "Username does not exit" });
      if (user.password !== password)
        return res
          .status(200)
          .json({ success: false, message: "Wrong password" });

      res.json({ success: true, message: "Login success",user });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  }
}

module.exports = new AuthController();

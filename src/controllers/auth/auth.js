const { User } = require("../../models");
const { getPayloadWithValidFieldsOnly } = require("../../helpers/utils");

const signup = async (req, res) => {
  try {
    const payload = getPayloadWithValidFieldsOnly(
      ["email", "username", "password"],
      req.body
    );

    if (Object.keys(payload).length !== 3) {
      return res.status(400).json({
        success: false,
        error: "Please provide valid fields in post body",
      });
    }

    await User.create(payload);

    return res.json({ success: true, data: "Successfully created a user" });
  } catch (error) {
    console.log(`[ERROR]: Create user failed | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create user" });
  }
};

const login = async (req, res) => {
  try {
    const payload = getPayloadWithValidFieldsOnly(
      ["email", "password"],
      req.body
    );

    if (Object.keys(payload).length !== 2) {
      return res.status(400).json({
        success: false,
        error: "Please provide valid fields in post body",
      });
    }

    const user = await User.findOne({ where: { email: payload.email } });

    console.log("AUTH.js - USER:", user);

    if (!user) {
      return res.status(404).json({
        success: false,
        error: "User does not exist",
      });
    }

    const validPassword = await user.checkPassword(payload.password);

    if (!validPassword) {
      return res.status(401).json({
        success: false,
        error: "User not authorized",
      });
    }

    req.session.save(() => {
      req.session.userId = user.id;
      req.session.email = user.email;
      req.session.loggedIn = true;

      return res.json({ success: true, data: "Login successful" });
    });
  } catch (error) {
    console.log(`[ERROR]: Login user failed | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to login user" });
  }
};

const logout = (req, res) => {
  if (req.session.isLoggedIn) {
    req.session.destroy(() => {
      return res.status(200).json({ success: "Logout successful" });
    });
  } else {
    return res.status(500).json({ error: "Failed to logout" });
  }
};

module.exports = {
  signup,
  login,
  logout,
};

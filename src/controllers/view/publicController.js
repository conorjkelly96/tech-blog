const renderSignUp = (req, res) => {
  res.render("sign-up");
};

const renderLogin = (req, res) => {
  res.render("login");
};

module.exports = {
  renderSignUp,
  renderLogin,
};

const auth = (req, res, next) => {
  console.log("SESSION", req.session);
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = auth;

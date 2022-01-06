const logError = (type = "Server Error", message = "Something went wrong") => {
  console.error(`[ERROR]: ${type} | ${message}`);
};

const logInfo = (type, message) => {
  console.log(`[INFO]: ${type} | ${message}`);
};

const getPayloadWithValidFieldsOnly = (validFields, payload) =>
  Object.entries(payload).reduce(
    (acc, [key, value]) =>
      validFields.includes(key) ? { ...acc, [key]: value } : acc,
    {}
  );

const auth = (req, res, next) => {
  if (!req.session.user_id) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;

module.exports = {
  logError,
  logInfo,
  getPayloadWithValidFieldsOnly,
  auth,
};

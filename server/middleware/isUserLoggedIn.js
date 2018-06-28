module.exports = function(req, res, next) {
  if (!req.session.user.username) {
    return res.status(401).send({ error: "must be logged in to post" });
  } else {
    next();
  }
};

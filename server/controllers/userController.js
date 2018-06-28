var users = [];

module.exports = {
  read(req, res) {
    res.status(200).send(req.session.user);
  },
  login(req, res) {
    const { username, password } = req.body;
    let match = users.find(function(user) {
      return user.username === username && user.password === password;
    });
    if (match) {
      req.session.user = match;
      res.status(200).send(req.session.user);
    } else {
      res.status(401).send({ error: "unauthorized" });
    }
  },
  register(req, res) {
    // check if username already taken.
    const { username, password } = req.body;
    if (
      users.find(function(user) {
        return user.username === username;
      })
    ) {
      res.status(500).send({ error: "username taken" });
    } else {
      users.push({ username, password });
      res.status(200).send({ username });
    }
  },
  logout(req, res) {
    req.session.destroy();
    res.status(200).send(req.session);
  }
};

var users = [];

module.exports = {
  read(req, res) {
    console.log("user controller, read");
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
      console.log("registration failed, sending error: username taken");
      res.status(500).send({ error: "username taken" });
    } else {
      users.push({ username, password });
      res.status(200).send({ username });
    }
  }
};

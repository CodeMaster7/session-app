var messages = [];
var id = 0;

module.exports = {
  // get all messages
  read(req, res) {
    res.status(200).send(messages);
  },
  // create message
  create(req, res) {
    const { text } = req.body;
    const timestamp = new Date().toTimeString().substr(0, 8);
    // get author from req.session.user.username
    const { username: author } = req.session.user;
    messages.push({ text, timestamp, author, id });
    id++;
    res.status(200).send(messages);
  }
};

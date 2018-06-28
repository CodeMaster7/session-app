var messages = [
  {
    text: "test message",
    timestamp: "the eternal now",
    author: "me"
  }
];

module.exports = {
  // get all messages
  read(req, res) {
    res.status(200).send(messages);
  },
  // create message
  create(req, res) {
    const { text, timestamp, author } = req.body;
    messages.push({ text, timestamp, author });
  }
};

var messages = [
  {
    text: "test message",
    timestamp: "the eternal now",
    author: "me"
  }
];
var id = 0;

module.exports = {
  // get all messages
  read(req, res) {
    res.status(200).send(messages);
  },
  // create message
  create(req, res) {
    const { text, author } = req.body;
    console.log("got this messages: ", text);
    const timestamp = new Date().toTimeString().substr(0, 8);
    messages.push({ text, timestamp, author, id });
    id++;
    res.status(200).send(messages);
  }
};

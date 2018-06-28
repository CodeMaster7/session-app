import axios from "axios";

const functions = {
  getMessages() {
    axios.get("/api/messages").then(res => {
      // check if new messages received
      const change = this.state.messages.length !== res.data.length;
      this.setState(
        {
          messages: res.data
        },
        () => {
          if (!change) return;
          var mc = document.getElementById("messages-container");
          mc.scrollTop = mc.scrollHeight;
        }
      );
    });
  },
  submitMessage(event) {
    // if pressed enter
    if (event.key === "Enter" && this.state.userInput.length) {
      // submit message, clear user input
      // server erquires a text, and author (timestamp supplied by server)
      axios
        .post("/api/message", {
          text: this.state.userInput,
          author: this.props.match.params.username
        })
        .then(res => {
          this.setState(
            {
              userInput: "",
              messages: res.data
            },
            () => {
              var mc = document.getElementById("messages-container");
              mc.scrollTop = mc.scrollHeight;
            }
          );
        });
    }
  },
  cdm() {
    axios
      .get("/api/messages")
      .then(res => {
        this.setState(
          {
            messages: res.data,
            fetchMessages: setInterval(this.getMessages, 1000 * 10)
          },
          () => {
            var mc = document.getElementById("messages-container");
            mc.scrollTop = mc.scrollHeight;
          }
        );
      })
      .catch(error => {
        console.log("got an error: ", error);
        this.setState({ error: error.response.data.error });
      });
  },
  logout() {
    axios.get("/api/logout").then(res => {
      this.props.history.push("/");
    });
  }
};

export default functions;

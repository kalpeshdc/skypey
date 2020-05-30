import React, { Component } from "react";
import "./Chats.css";

const Chat = ({ message, activeUser }) => {
  const { text, is_user_msg } = message;
  console.log(activeUser);

  return (
    <div className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>
      <button
        // data-active={activeUser}
        // data-number={number}
        // onClick={handleDeleteMessage}
        className="Chat_delete_button"
      >
        x
      </button>
      <span>{text}</span>
    </div>
  );
};

class Chats extends Component {
  constructor(props) {
    super(props);
    this.chatsRef = React.createRef();
  }
  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  scrollToBottom = () => {
    this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
  };
  handleDeleteMsg = () => {};
  render() {
    return (
      <div className="Chats" ref={this.chatsRef}>
        {this.props.messages.map((message) => (
          <Chat
            message={message}
            key={message.number}
            activeUser={this.props.activeUser}
          />
        ))}
      </div>
    );
  }
}

export default Chats;

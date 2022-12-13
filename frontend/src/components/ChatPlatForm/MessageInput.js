import React from "react";

const MessageInput = ({ sendMessage, setMessage, message }) => {
  return (
    <form className="msger-inputarea" onSubmit={sendMessage}>
      <input
        type="text"
        className="msger-input"
        placeholder="Enter your message..."
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        // In case(not in a form tag), you want to use another button to send a message.
        // onKeyPress={(e) => (e.key === "enter" ? sendMessage(e) : null)}
      />
      <button type="submit" className="msger-send-btn">
        Send
      </button>
    </form>
  );
};

export default MessageInput;

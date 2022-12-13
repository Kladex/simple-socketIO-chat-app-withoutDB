import React from "react";

const MessageInput = ({ sendMessage, setMessage, message }) => {
  return (
    <form className="msger-inputarea">
      <input
        type="text"
        className="msger-input"
        placeholder="Enter your message..."
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
      />
      <button
        type="submit"
        className="msger-send-btn"
        onClick={(e) => sendMessage(e)}
      >
        Send
      </button>
    </form>
  );
};

export default MessageInput;

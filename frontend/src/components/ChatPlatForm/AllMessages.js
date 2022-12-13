import React from "react";
import Message from "./Message";
import ScrollToBottom from "react-scroll-to-bottom";

const AllMessages = ({ messages, userName }) => {
  return (
    <main className="msger-chat">
      <ScrollToBottom>
        {messages.map((message, i) => (
          <Message key={i} message={message} userName={userName} />
        ))}
      </ScrollToBottom>
    </main>
  );
};

export default AllMessages;

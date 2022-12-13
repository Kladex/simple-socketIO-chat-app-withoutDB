import React, { useState, useEffect } from "react";

import MessageInput from "../components/ChatPlatForm/MessageInput";

import io from "socket.io-client";

import AllMessages from "../components/ChatPlatForm/AllMessages";
import { useParams } from "react-router";

let socket;

const ChatPlatform = () => {
  // const [visible, setVisible] = useState(false);

  const [userName, setUserName] = useState("");
  const [roomId, setRoomId] = useState("");
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const params = useParams();

  useEffect(() => {
    const { userName, roomId } = params;

    socket = io("http://localhost:5000");

    setUserName(userName);
    setRoomId(roomId);

    socket.emit("join", { userName, roomId }, (err) => {
      if (err) {
        alert(err);
      }
    });
  }, [params]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomDetails", ({ users }) => {
      setUsers(users);
    });
  }, []);

  // const showDrawer = (e) => {
  //   e.preventDefault();
  //   setVisible(true);
  // };

  // const onClose = () => {
  //   setVisible(false);
  // };

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }

    console.log(users);
  };

  return (
    <>
      <section className="msger">
        <header className="msger-header">
          <div className="msger-header-title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chat-left-dots-fill"
              viewBox="0 0 16 16"
            >
              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>{" "}
            Chatty - The Simple Chat Application [
            {/* <a href='/#' onClick={showDrawer}>
              {' '}
              {roomId}
            </a> */}
            {roomId}]
          </div>
          <div className="msger-header-options">
            <span>
              <a href="/">Sign Out</a>
            </span>
          </div>
        </header>
        <AllMessages messages={messages} userName={userName} />
        <MessageInput
          sendMessage={sendMessage}
          message={message}
          setMessage={setMessage}
        />
      </section>
    </>
  );
};

export default ChatPlatform;

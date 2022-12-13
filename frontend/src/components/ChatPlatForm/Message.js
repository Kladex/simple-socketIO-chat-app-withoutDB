import React from "react";
import ReactEmoji from "react-emoji";

const Message = ({ message: { textContent, user }, userName }) => {
  let sentByThisUser = false;

  const trimmedUserName = userName.trim().toLowerCase();

  if (user === trimmedUserName) {
    sentByThisUser = true;
  }

  return (
    <>
      {!sentByThisUser ? (
        <div className="msg left-msg">
          <div className="msg-bubble">
            <div className="msg-info">
              <div className="msg-info-name">
                <u>{user}</u>
              </div>
            </div>

            <div className="msg-text">{ReactEmoji.emojify(textContent)}</div>
          </div>
        </div>
      ) : (
        <div className="msg right-msg">
          <div className="msg-bubble">
            <div className="msg-info">
              <div className="msg-info-name">
                <u>{user}</u>
              </div>
            </div>

            <div className="msg-text">{ReactEmoji.emojify(textContent)}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Message;

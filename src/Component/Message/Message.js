import React from "react";

import Avatar from "Component/Avatar";

import "assets/css/Message.css";

function Message({ messages }) {
  const { user, message, timestamp } = messages;

  return (
    <div className="message">
      <Avatar imgSrc={user.photo} />
      <div className="message-info">
        <h4>
          { user.displayName }
          <span className="message-timestamp">{ (new Date(timestamp?.toDate())).toUTCString() }</span>
        </h4>
        <p className="message-text">{message}</p>
      </div>
    </div>
  );
}

export default Message;

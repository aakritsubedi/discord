import React from "react";

import Avatar from "Component/Avatar";

import "assets/css/Message.css";

function Message() {
  return (
    <div className="message">
      <Avatar imgSrc='http://aakritsubedi.com.np/images/profile_new.jpg' />
      <div className="message-info">
        <h4>
          aakrit_subedi
          <span className="message-timestamp">timestamp</span>
        </h4>
        <p className="message-text">This is a message ...</p>
      </div>
    </div>
  );
}

export default Message;

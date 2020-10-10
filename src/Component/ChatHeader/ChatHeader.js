import React from "react";

import FaIcon from "Component/FaIcon";

import "assets/css/Chat.css";

function ChatHeader({ channelName }) {
  return (
    <div className="chat-header">
      <div className="chat-header-left">
        <h3>
          <span className="chat-header-hash">#</span>
          {channelName}
        </h3>
      </div>
      <div className="chat-header-right">
        <FaIcon icon="fa fa-bell" />
        <FaIcon icon="fa fa-map-marker" />
        <FaIcon icon="fa fa-users" />

        <div className="chat-header-search">
          <input type="text" placeholder='Search' />
          <FaIcon icon = 'fa fa-search' />
        </div>
        <FaIcon icon = 'fa fa-inbox' />
        <FaIcon icon = 'fa fa-question-circle' />
      </div>
    </div>
  );
}

export default ChatHeader;

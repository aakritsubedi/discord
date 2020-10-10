import React from "react";

import FaIcon from 'Component/FaIcon';
import Message from 'Component/Message';
import ChatHeader from 'Component/ChatHeader';

import "assets/css/Chat.css";

function Chat() {
  return (
    <div className="chat-container">
      <ChatHeader channelName='Test Channel' color='#ffffff' />
      <div className="chat-messages">
        <Message />
        <Message />
        <Message />
      </div>
      <div className="chat-input">
        <FaIcon icon="fa fa-plus-circle" size="32" color='#ffffff' />
        <form>
          <input type="text" placeholder='Message #TestChannel'/>
          <button className='chat-input-button' type='submit'>Send Message</button>
        </form>
        <div className="chat-icons">
          <FaIcon icon='fa fa-gift' color='#ffffff' size="24" />
          <FaIcon icon='fa fa-heart' color='#ffffff' size="24" />
          <FaIcon icon='fa fa-smile-o' color='#ffffff' size="24" />
        </div>
      </div>
    </div>
  );
}

export default Chat;

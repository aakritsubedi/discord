import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import FaIcon from "Component/FaIcon";
import Message from "Component/Message";
import ChatHeader from "Component/ChatHeader";

import { selectUser } from "features/users/userSlice";
import { selectChannelId, selectChannelName } from "features/app/appSlice";

import db from "Firebase";
import firebase from "firebase";

import "assets/css/Chat.css";

function Chat() {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (channelId) {
      db.collection("channel")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [channelId]);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("channel").doc(channelId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      user: user,
    });

    setInput("");
  };

  return (
    <div className="chat-container">
      <ChatHeader channelName={channelName} color="#ffffff" />
      <div className="chat-messages">
        {messages.map((message, key) => (
          <Message messages={message} key={key} />
        ))}
      </div>
      <div className="chat-input">
        <FaIcon icon="fa fa-plus-circle" size="32" color="#ffffff" />
        <form>
          <input
            type="text"
            placeholder={`Message ${channelName}`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={!channelId}
          />
          <button
            className="chat-input-button"
            type="submit"
            disabled={!channelId}
            onClick={sendMessage}
          >
            Send Message
          </button>
        </form>
        <div className="chat-icons">
          <FaIcon icon="fa fa-gift" color="#ffffff" size="24" />
          <FaIcon icon="fa fa-heart" color="#ffffff" size="24" />
          <FaIcon icon="fa fa-smile-o" color="#ffffff" size="24" />
        </div>
      </div>
    </div>
  );
}

export default Chat;

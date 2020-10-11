import React from "react";
import { useSelector } from "react-redux";

import FaIcon from "Component/FaIcon";
import Avatar from "Component/Avatar";
import SidebarChannel from "Component/SidebarChannel";

import { auth } from "Firebase";

import { selectUser } from "features/users/userSlice";

import "assets/css/Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);

  const logout = () => {
    auth.signOut();
  }

  return (
    <div className="sidebar-container">
      <div className="sidebar-title">
        dDiscord
        <FaIcon icon="fa fa-angle-down" size="16" color="white" />
      </div>
      <div className="sidebar-channels">
        <div className="sidebar-channel-header">
          <div className="sidebar-header">
            <FaIcon icon="fa fa-angle-down" size="16" color="white" />
            <h4>Text Channels</h4>
          </div>
          <FaIcon icon="fa fa-plus" className="sidebar__addChannel" />
        </div>
        <div className="sidebar-channelList">
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
        </div>
      </div>
      <div className="sidebar-voice">
        <FaIcon icon="fa fa-signal" size="32" color="#4fb185"/>
        <div className="voice-info">
          <h4>Voice Connected</h4>
          <p>Stream</p>
        </div>
        <div className="sidebar-voiceIcons">
          <FaIcon icon="fa fa-info-circle" />
          <FaIcon icon="fa fa-phone" />
        </div>
      </div>
      <div className="sidebar-profile">
        <Avatar imgSrc={user.photo} onClick={logout} />
        <div className="sidebar-profileInfo">
        <h3>{user.displayName}</h3>
        <p>{user.email}</p>
        </div>
        <div className="sidebar-profileIcons">
          <FaIcon icon="fa fa-microphone" />
          <FaIcon icon="fa fa-headphones" />
          <FaIcon icon="fa fa-cog" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

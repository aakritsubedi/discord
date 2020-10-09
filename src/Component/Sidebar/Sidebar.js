import React from "react";

import FaIcon from "Component/FaIcon";
import SidebarChannel from "Component/SidebarChannel";

import "assets/css/Sidebar.css";

function Sidebar() {
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
        <FaIcon icon="fa fa-signal" className="sidebar-voiceIcon" size="32" color="#4fb185"/>
        <div className="voice-info">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className="sidebar-voiceIcons">
          <FaIcon icon="fa fa-info-circle" />
          <FaIcon icon="fa fa-phone" />
        </div>
      </div>
      <div className="sidebar-profile">
        <span className="profile-avatar">A</span>
        <div className="sidebar-profileInfo">
          <h3>@aakrit_subedi</h3>
          <p>#thisIsMyID</p>
        </div>
        <div className="sidebar-profileIcons">
          <FaIcon icon="fa fa-microphone" color="#808080"/>
          <FaIcon icon="fa fa-headphones" color="#808080"/>
          <FaIcon icon="fa fa-cog" color="#808080"/>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

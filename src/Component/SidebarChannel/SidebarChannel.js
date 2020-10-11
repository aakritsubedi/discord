import React from "react";

import "assets/css/Sidebar.css";

function SidebarChannel({ id, channelName }) {
  return (
    <div className="sidebar-channel">
      <h4>
        <span className="sidebar-channel-hash">#</span>
        {channelName.channelName}
      </h4>
    </div>
  );
}

export default SidebarChannel;

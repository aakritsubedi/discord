import React from "react";

import "assets/css/Sidebar.css";

function SidebarChannel({ id, channel }) {
  return (
    <div className="sidebar-channel">
      <h4>
        <span className="sidebar-channel-hash">#</span>
        Youtube
      </h4>
    </div>
  );
}

export default SidebarChannel;

import React from "react";
import { useDispatch } from "react-redux";

import { setChannelInfo } from "features/app/appSlice";

import "assets/css/Sidebar.css";

function SidebarChannel({ id, channelName }) {
  const dispatch = useDispatch();

  const setChannelInformation = () => {
    dispatch(setChannelInfo({
      channelId: id,
      channelName: channelName.channelName
    }))
  }

  return (
    <div className="sidebar-channel" onClick={setChannelInformation}>
      <h4>
        <span className="sidebar-channel-hash">#</span>
        {channelName.channelName}
      </h4>
    </div>
  );
}

export default SidebarChannel;

import React from "react";

function Avatar({ imgSrc, username, onClick }) {
  return (
    <div onClick={onClick}>
      {imgSrc ? (
        <img
          src={imgSrc}
          className="profile-avatar-image"
          alt="userimage"
          title="User Image"
          style={{ cursor: "pointer" }}
        />
      ) : (
        <div className="profile-avatar">
          {username ? username.split(0, 1) : "dD"}
        </div>
      )}
    </div>
  );
}

export default Avatar;

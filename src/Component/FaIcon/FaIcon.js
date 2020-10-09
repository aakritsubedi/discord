import React from "react";

function FaIcon({ icon, size, color }) {
  return <span className={icon} style={{ fontSize: `${size}px`, color: color }} />;
}

export default FaIcon;

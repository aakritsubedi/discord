import React from "react";

function FaIcon({ icon, className, size, color }) {
  return (
    <div className={className}>
      <span className={icon} style={{ fontSize: `${size}px`, color: color, margin: '0px 3px' }} />
    </div>
  );
}

export default FaIcon;

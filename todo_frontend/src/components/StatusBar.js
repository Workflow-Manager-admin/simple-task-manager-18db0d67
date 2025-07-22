import React from "react";

// PUBLIC_INTERFACE
function StatusBar() {
  /** Minimal mobile-mimic status bar for demo. */
  return (
    <div className="status-bar">
      <div className="status-left">
        <span className="status-time">9:41</span>
      </div>
      <div className="status-icons">
        <img
          src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/65c1d550-fe03-472e-96c7-1d430adb8b5e"
          alt="Status Icons"
          width={69}
          height={14}
        />
      </div>
      <div className="status-right">{/* Reserved for wifi, battery, etc. */}</div>
    </div>
  );
}

export default StatusBar;

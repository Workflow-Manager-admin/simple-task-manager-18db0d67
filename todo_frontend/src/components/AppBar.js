import React from "react";

// PUBLIC_INTERFACE
function AppBar() {
  /** AppBar for mobile-like header with app title and calendar icon. */
  return (
    <div className="app-bar">
      <span className="app-title">TODO APP</span>
      <img
        className="calendar-icon"
        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9fe3e467-f04a-4133-ba74-208fb1b85a1f"
        alt="Calendar Icon"
        width={32}
        height={32}
      />
    </div>
  );
}

export default AppBar;

import React from "react";

// PUBLIC_INTERFACE
function TodoNavbar({ view, setView }) {
  /**
   * Navigation bar to switch between "All" and "Completed" views.
   * @param {string} view - Current selected view key.
   * @param {function} setView - Callback to set selected view (either "all" or "completed").
   */
  return (
    <div className="todo-navbar">
      <button
        className={`nav-btn nav-all${view === "all" ? " active" : ""}`}
        onClick={() => setView("all")}
        aria-label="Show all todos"
      >
        <img
          className="nav-icon"
          src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/50b74d4e-a78a-4ad6-ba97-9f64a8865c5b"
          alt="All icon"
          width={30}
          height={30}
        />
        <span>All</span>
      </button>
      <button
        className={`nav-btn nav-completed${view === "completed" ? " active" : ""}`}
        onClick={() => setView("completed")}
        aria-label="Show completed todos"
      >
        <img
          className="nav-icon"
          src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38ee023d-1e10-4d9a-9c71-f800cb2b13d0"
          alt="Completed icon"
          width={30}
          height={30}
        />
        <span>Completed</span>
      </button>
    </div>
  );
}

export default TodoNavbar;

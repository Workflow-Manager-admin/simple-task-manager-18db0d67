import React from "react";

// PUBLIC_INTERFACE
function FloatingActionButton({ onClick }) {
  /**
   * Floating circular button at the bottom center for adding todos.
   * @param {function} onClick - Handler when add button clicked.
   */
  return (
    <button className="add-todo-btn" title="Add New Todo" onClick={onClick}>
      <span className="plus-icon">
        <img
          src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4f93fc08-6477-4172-b648-b0fc23eb296b"
          alt="Add"
          width={34}
          height={34}
        />
      </span>
    </button>
  );
}

export default FloatingActionButton;

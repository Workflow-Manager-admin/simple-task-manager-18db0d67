import React from "react";

// PUBLIC_INTERFACE
function TodoCard({
  title,
  description,
  onComplete,
  onDelete,
  onEdit,
  completed
}) {
  /**
   * Represents a single todo card.
   * @param {string} title - Todo title.
   * @param {string} description - Todo description.
   * @param {function} onComplete - Handler for complete button.
   * @param {function} onDelete - Handler for delete button.
   * @param {function} onEdit - Handler for edit button.
   * @param {boolean} completed - Whether the todo is completed.
   */
  return (
    <div className="todo-card">
      <div className="todo-card-main">
        <div className="todo-info">
          <div className="todo-title" style={completed ? { color: "#8b8b8b", textDecoration: "line-through" } : {}}>
            {title}
          </div>
          <div className="todo-desc" style={completed ? { color: "#8b8b8b", textDecoration: "line-through" } : {}}>
            {description}
          </div>
        </div>
        <div className="todo-controls">
          <button className="icon-btn" title="Mark as complete" onClick={onComplete}>
            <img
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/39a1bd72-250a-4bf3-8d4e-4a9f79ccae60"
              alt="CheckCircle"
              width={25}
              height={25}
            />
          </button>
          <button className="icon-btn" title="Delete" onClick={onDelete}>
            <img
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a1a8f54e-1362-4884-b2a4-e2e494744d42"
              alt="Trash"
              width={25}
              height={25}
            />
          </button>
          <button className="icon-btn" title="Edit" onClick={onEdit}>
            <img
              src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e1c69fa1-05b8-4661-8e91-d773a1fa6919"
              alt="Pencil"
              width={25}
              height={25}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoCard;

import React from "react";
import TodoCard from "./TodoCard";

// PUBLIC_INTERFACE
function TodoList({ todos, onComplete, onDelete, onEdit }) {
  /**
   * Displays a list of TodoCards.
   * @param {Array} todos - Array of todo {id, title, description, completed}
   * @param {function} onComplete(id)
   * @param {function} onDelete(id)
   * @param {function} onEdit(id)
   */
  return (
    <div className="todos-list">
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          title={todo.title}
          description={todo.description}
          completed={todo.completed}
          onComplete={() => onComplete(todo.id)}
          onDelete={() => onDelete(todo.id)}
          onEdit={() => onEdit(todo.id)}
        />
      ))}
    </div>
  );
}

export default TodoList;

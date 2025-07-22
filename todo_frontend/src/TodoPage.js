import React, { useState } from "react";
import StatusBar from "./components/StatusBar";
import AppBar from "./components/AppBar";
import TodoNavbar from "./components/TodoNavbar";
import TodoList from "./components/TodoList";
import FloatingActionButton from "./components/FloatingActionButton";
import "./todo-page.css"; // Import styles for todo-page

// PUBLIC_INTERFACE
function TodoPage() {
  /** The main Todo Page layout with all modular components & state logic. */
  const [view, setView] = useState("all");
  // Demo sample todos. Logic/Data integration will follow in app logic.
  const [todos, setTodos] = useState([
    { id: 1, title: "Buy groceries", description: "Milk, Bread, Cheese", completed: false },
    { id: 2, title: "Call Mom", description: "Her birthday!", completed: true },
    { id: 3, title: "Finish report", description: "Due next week", completed: false }
  ]);
  // Modal logic, etc. to be added when integrating with full app.

  // Filtering - placeholder
  const shownTodos = view === "all" ? todos : todos.filter((t) => t.completed);

  // Handlers (currently stubbed out)
  const handleAdd = () => { alert("Add new todo (stub)"); };
  const handleComplete = (id) => { alert("Mark complete: " + id + " (stub)"); };
  const handleDelete = (id) => { alert("Delete: " + id + " (stub)"); };
  const handleEdit = (id) => { alert("Edit: " + id + " (stub)"); };

  return (
    <div className="frame-todo-page">
      <StatusBar />
      <AppBar />
      <TodoNavbar view={view} setView={setView} />
      <TodoList
        todos={shownTodos}
        onComplete={handleComplete}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
      <FloatingActionButton onClick={handleAdd} />
    </div>
  );
}

export default TodoPage;

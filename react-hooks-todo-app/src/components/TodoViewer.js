import React from "react";

import "./TodoViewer.css";
const TodoViewer = ({ todos, deleteItem, updateItem }) => {
  return (
    <div id="todo">
      {todos.map(todo => {
        return (
          <div key={todo.id}>
            {todo.title}
            <button id="del" onClick={() => deleteItem(todo.id)}>
              Delete
            </button>
            <button id="update" onClick={() => updateItem(todo)}>
              Update
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoViewer;

import React, { useState, useRef, useEffect } from "react";

import "./App.css";
import TodoViewer from "./components/TodoViewer";
import Modal from "./components/Modal";
import Input from "./components/Input";

function App() {
  const [todos, setTodos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const value = useRef(null);
  const [updateObject, setUpdateObject] = useState(null);
  const handleClick = () => {
    if (value.current.value !== "" && value.current.value.trim() !== "") {
      setTodos([
        ...todos,
        { id: Math.random() * Math.PI, title: value.current.value }
      ]);
      value.current.value = "";
    }
  };

  const handleDelete = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleKeyPress = e => {
    if (
      e.keyCode === 13 &&
      value.current.value !== "" &&
      value.current.value.trim() !== ""
    ) {
      setTodos([
        ...todos,
        { id: Math.random() * Math.PI, title: value.current.value }
      ]);
      value.current.value = "";
    }
  };

  useEffect(() => {
    document.addEventListener("keypress", handleKeyPress);
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  });

  const handleUpdate = item => {
    setShowModal(true);
    setUpdateObject({ id: item.id, title: item.title });
  };

  const updateValue = newValue => {
    // Update Item
    setTodos(
      todos.map(todo => {
        if (todo.id === updateObject.id) {
          todo.title = newValue.current.value;
        }
        return todo;
      })
    );
    setUpdateObject(null);
    setShowModal(false);
  };

  return (
    <div className="App">
      <Input value={value} handleFunction={handleClick} title="Add" />
      <TodoViewer
        todos={todos}
        deleteItem={handleDelete}
        updateItem={handleUpdate}
      />
      {showModal ? (
        <Modal
          closeModal={() => {
            setShowModal(false);
          }}
          initialValue={updateObject.title}
          updateValue={updateValue}
        />
      ) : null}
    </div>
  );
}

export default App;

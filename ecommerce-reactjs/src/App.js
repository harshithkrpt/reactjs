import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/UI/Navbar";

import db from "./config/db";
import { Button } from "@material-ui/core";

function App() {
  const [names, setnames] = useState([]);
  useEffect(() => {
    document.title = "Ecommerce App";
  });
  const inputName = useRef(null);
  const handleSave = e => {
    db.collection("name")
      .add({
        name: inputName.current.value
      })
      .then(doc => {
        console.log(doc.id);
      })
      .catch(err => {
        console.error(err);
      });
    inputName.current.value = "";
  };

  useEffect(() => {
    db.collection("name")
      .get()
      .then(querySnapShot => {
        console.log("Snap Shot : ", querySnapShot);
        querySnapShot.forEach(doc => {
          setnames([...names, doc.data()]);
        });
      })
      .catch(err => {
        console.log(err);
      });
  }, [names]);

  return (
    <div className="App">
      <Navbar />
      <h1>Add Data</h1>
      <input ref={inputName} />
      <Button variant="contained" color="primary" onClick={handleSave}>
        Add
      </Button>
    </div>
  );
}

export default App;

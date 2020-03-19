import React, { useRef } from "react";

import "./Modal.css";
import Input from "./Input";

const Modal = ({ closeModal, updateValue, initialValue }) => {
  const value = useRef(null);

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <Input
          title="Update"
          value={value}
          initialValue={initialValue}
          handleFunction={updateValue}
        />
      </div>
    </div>
  );
};

export default Modal;

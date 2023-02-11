import React, { useState } from "react";
import Form from "./form";
import { GrFormClose } from "react-icons/gr";
import { FaRegEdit } from "react-icons/fa";

function Todo({ todoItems, completeTodoItem, removeTodoItem, updateTodoItem }) {
  const [update, setUpdate] = useState({
    id: null,
    value: "",
  });

  const submitTheUpdate = (updateValue) => {
    updateTodoItem(update.id, updateValue);
    setUpdate({
      id: null,
      value: "",
    });
  };

  if (update.id) {
    return <Form update={update} onSubmit={submitTheUpdate} />;
  }
  return todoItems.map((todoItem, index) => (
    <div
      className={todoItem.isComplete ? "complete normal-row" : "normal-row"}
      key={index}
    >
      <div key={todoItem.id} onClick={() => completeTodoItem(todoItem.id)}>
        {todoItem.text}
      </div>
      <div className="ics">
        <GrFormClose
          onClick={() => removeTodoItem(todoItem.id)}
          className="delIcn"
        />
        <FaRegEdit
          onClick={() => setUpdate({ id: todoItem.id, value: todoItem.text })}
          className="editIcn"
        />
      </div>
    </div>
  ));
}

export default Todo;

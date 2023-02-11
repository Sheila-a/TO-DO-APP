import React, { useState } from "react";
import Form from "./form";
import Todo from "./Todo";

function List() {
  const [todoItems, setTodoItems] = useState([]);

  const addTodoItem = (todoItem) => {
    // this basically formats whatever the user inputs . if they enter just spaces it wouldnt register.
    if (!todoItem.text || /^\s*$/.test(todoItem.text)) {
      return;
    }

    const newTodoItems = [todoItem, ...todoItems];

    setTodoItems(newTodoItems);
  };

  const updateTodoItem = (tId, newItemValue) => {
    if (!newItemValue.text || /^\s*$/.test(newItemValue.text)) {
      return;
    }

    setTodoItems((prev) =>
      prev.map((item) => (item.id === tId ? newItemValue : item))
    );
  };

  const removeTodoItem = (id) => {
    const removeItem = [...todoItems].filter((todoItem) => todoItem.id !== id);

    setTodoItems(removeItem);
  };

  const completeTodoItem = (id) => {
    let updatedTodoItems = todoItems.map((todoItem) => {
      if (todoItem.id === id) {
        todoItem.isComplete = !todoItem.isComplete;
      }
      return todoItem;
    });

    setTodoItems(updatedTodoItems);
  };

  return (
    <div>
      <Form onSubmit={addTodoItem} />
      <Todo
        todoItems={todoItems}
        completeTodoItem={completeTodoItem}
        removeTodoItem={removeTodoItem}
        updateTodoItem={updateTodoItem}
      />
      <p>Item count: {todoItems.length}</p>
    </div>
  );
}

export default List;

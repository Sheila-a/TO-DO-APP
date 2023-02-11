import React, { useEffect, useRef, useState } from "react";
import "../style/main.css";

function Form(props) {
  const [item, setItem] = useState(props.update ? props.update.value : "");

  const itemRef = useRef(null);

  useEffect(() => {
    itemRef.current.focus();
  });

  //   to handle the changes
  const handleTheChanges = (e) => {
    setItem(e.target.value);
  };

  //   to prevent re-loading
  const handleTheSubmit = (e) => {
    e.preventDefault();

    // create props to access data in the other components
    props.onSubmit({
      // this generates a random number within 10000 range
      id: Math.floor(Math.random() * 10000),
      text: item,
    });

    setItem("");
  };
  return (
    <form onSubmit={handleTheSubmit} className="flexx">
      {props.update ? (
        <>
          <input
            type="text"
            placeholder="Update item"
            value={item}
            onChange={handleTheChanges}
            ref={itemRef}
            name="text"
            className="formInput edit"
          />
          <button className="formButton edit" style={{ color: "#fff" }}>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add item to list"
            value={item}
            onChange={handleTheChanges}
            ref={itemRef}
            name="text"
            className="formInput"
          />
          <button className="formButton">Add todo </button>
        </>
      )}
    </form>
  );
}

export default Form;

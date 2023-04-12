import React, { useState } from "react";
import UserProfile from "./components/UserProfile";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [enteredUser, setEnteredUser] = useState();

  function nameChangeHandler(e) {
    setName(e.target.value);
  }
  function ageChangeHandler(e) {
    setAge(e.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    if (age === "" || name === "") {
      return;
    }

    setEnteredUser({
      name: name,
      age: age,
    });
  }
  return (
    <div className="backdrop">
      <div className="container">
        <form onSubmit={submitHandler}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={nameChangeHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            placeholder="Enter Age"
            value={age}
            onChange={ageChangeHandler}
          />
          <button>Submit</button>
        </form>
        <UserProfile user={enteredUser} />
      </div>
    </div>
  );
};

export default App;

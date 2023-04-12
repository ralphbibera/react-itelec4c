import React from "react";
import "./UserProfile.css";
const UserProfile = (props) => {
  let age;
  let name;

  if (props.user) {
    age = props.user.age;
    name = props.user.name;
  }

  return (
    props.user && (
      <div className="user-profile">
        <h1>Name: {name}</h1>
        <h1>
          {age >= 18
            ? `Age: ${age}`
            : "Sorry, you are too young to view your age."}
        </h1>
      </div>
    )
  );
};

export default UserProfile;

import React from "react";

function Profile() {
  const randomText =
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.\n" +
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ";
  return (
    <div>
      <h1>Little Lemon</h1>
      <h3>Chicago</h3>
      <p>{randomText}</p>
    </div>
  );
}

export default Profile;

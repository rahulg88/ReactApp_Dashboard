import React, { useState } from "react";
import Login from "./Login";
import Logout from "./Logout";

const Homepage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLoginState = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  return (
    <div>
      <div>{isLoggedIn ? <Login /> : <Logout />}</div>
      <div>
        <button onClick={toggleLoginState}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Homepage;

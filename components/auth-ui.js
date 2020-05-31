import React, { useEffect } from "react";
import startFirebaseUI from "../auth/firebase-auth-ui.js";

const AuthUI = () => {
  console.log("authui");
  useEffect(() => {
    console.log("got to use effect");
    startFirebaseUI("#firebaseui");
  }, []);

  return (
    <div>
      <h1>working</h1>
      {/* <div id="firebaseui"></div> */}
      security stuff based on tag
    </div>
  );
};

export default AuthUI;

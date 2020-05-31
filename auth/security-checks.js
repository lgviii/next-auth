import { useState } from "react";
import * as firebase from "firebase";

export const isLoggedOn = function (setIsUserLoggedIn, setisAuthLoaded) {
  // let isUserLoggedIn = false;

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("User is logged in");
      setIsUserLoggedIn(true);
      setisAuthLoaded(true);
    } else {
      console.log("User is not logged in");
      setIsUserLoggedIn(false);
      setisAuthLoaded(true);
    }
  });

  // let user = firebase.auth().currentUser
  // console.log("User:" + user);
  // return isUserLoggedIn;
};

export const logOut = function () {
  firebase
    .auth()
    .signOut()
    .then(function () {
      console.log("logged out");
    })
    .catch(function (error) {
      console.log("error logging out: " + error);
    });
};

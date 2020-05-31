import * as firebase from "firebase";
import * as firebaseui from "firebaseui";
import auth from "./firebase-auth";

// This is our firebaseui configuration object
const uiConfig = {
  signInSuccessUrl: "/",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // window.firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  tosUrl: "/terms-of-service-make-this-soon", // This doesn't exist yet
};

const ui = new firebaseui.auth.AuthUI(firebase.auth());

const startFirebaseUI = function (elementId) {
  ui.start(elementId, uiConfig);
};

export default startFirebaseUI;

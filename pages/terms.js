import { isLoggedOn } from "../auth/security-checks";
import React, { useEffect, useState } from "react";
import Page from "../components/page";

export default function Private() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isAuthLoaded, setisAuthLoaded] = useState(false);

  useEffect(() => {
    isLoggedOn(setIsUserLoggedIn, setisAuthLoaded);
    console.log("logged in state:");
    console.log(isUserLoggedIn);
  }, []);

  return (
    <Page>
      <img src="./terms.jpg" />
    </Page>
  );
}

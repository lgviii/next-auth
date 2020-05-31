import Link from "next/link";
import Head from "next/head";
import React, { useEffect, useState } from "react";
// import dynamic from "next/dynamic";
import { isLoggedOn, logOut } from "../auth/security-checks";

import * as firebase from "../auth/firebase-auth";

// const ClientSideSecurity = dynamic(() => import("../components/security"), {
//   ssr: false,
// });

// const AuthUI = dynamic(() => import("../components/auth-ui"), {
//   ssr: false,
// });

const Header = () => {
  // turn this into a HOC by wrapping it for reuse!!!

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isAuthLoaded, setisAuthLoaded] = useState(false);

  useEffect(() => {
    isLoggedOn(setIsUserLoggedIn, setisAuthLoaded);
    // setIsUserLoggedIn(true);
    console.log("logged in state:");
    console.log(isUserLoggedIn);
  }, []);

  return (
    <div>
      {/* <Head>
        <title>Auth App</title>
        <link rel="icon" href="/lock.jpg" />
      </Head> */}
      <div>
        {/* <AuthUI /> */}
        Welcome to the NextJS with FireBase Example!
        <div style={{ display: "flex", flexDirection: "row" }}>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/user-info">
                <a>A Private Page</a>
              </Link>
            </li>
            {isAuthLoaded && isUserLoggedIn && (
              <li>
                <Link href="/admin">
                  <a>Admin Page (You can only see this when logged in...)</a>
                </Link>
              </li>
            )}
          </ul>
          <div
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
              width: "200px",
              justifyContent: "center",
            }}
          >
            {isAuthLoaded && (
              <div>
                {isUserLoggedIn ? (
                  <Link href="/">
                    <button
                      onClick={() => {
                        console.log("logout click");
                        logOut();
                      }}
                    >
                      log out
                    </button>
                  </Link>
                ) : (
                  <Link href="/login">
                    <button
                      onClick={() => {
                        console.log("login click");
                      }}
                    >
                      log in
                    </button>
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

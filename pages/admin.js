import { isLoggedOn } from "../auth/security-checks";
import React, { useEffect, useState } from "react";
import Page from "../components/page";

export default function Private() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    isLoggedOn(setIsUserLoggedIn);
  }, []);

  return (
    <Page>
      <div>
        {isUserLoggedIn && (
          <div>
            <h1
              style={{
                marginTop: "30px",
                lineHeight: "1.15",
                fontSize: "40px",
                textAlign: "center",
              }}
            >
              Secret admin stuff!
            </h1>
            <p
              style={{
                marginTop: "30px",
                lineHeight: "1.15",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              You are logged on so you can see all the admin secrets!
              {}
            </p>
          </div>
        )}
        {isUserLoggedIn == false && (
          <div>
            <h1
              style={{
                marginTop: "30px",
                lineHeight: "1.15",
                fontSize: "40px",
                textAlign: "center",
              }}
            >
              This is a private page!
            </h1>
            <p
              style={{
                marginTop: "30px",
                lineHeight: "1.15",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              Go log in or you can't see this info!
            </p>
          </div>
        )}
      </div>
    </Page>
  );
}

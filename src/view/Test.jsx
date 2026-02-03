import React, { useEffect, useState } from "react";
import liff from "@line/liff";
const Test = () => {
  const [isProfile, setIsProfile] = useState(null);
  const [accToken, setAccToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [invCode, setInvCode] = useState(null);
  useEffect(() => {
    liff
      .init({
        liffId: "2001775052-HqHM8FIP",
      })
      .then(() => {
        setIsLoggedIn(liff.isLoggedIn());
        if (!liff.isLoggedIn()) {
          liff.login({ redirectUri: window.location.href });
        } else {
          //-- param
          const urlParams = new URLSearchParams(window.location.search);
          setInvCode(urlParams.get("invCode"));
          //-- 取得 access token
          const accessToken = liff.getAccessToken();
          setAccToken(accessToken);
          //-- 取得使用者資訊
          liff.getProfile().then((profile) => {
            setIsProfile(JSON.stringify(profile));
          });
        }
      })
      .catch((err) => {
        console.error("LIFF initialization failed", err);
      });
  }, []);
  return (
    <div className="p-4">
      TEST
      <hr />
      <div>{isLoggedIn && isLoggedIn.toString()}</div>
      <hr />
      <div>{accToken}</div>
      <hr />
      <div>{isProfile}</div>
      <hr />
      <div>searchParam : {invCode}</div>
    </div>
  );
};
export default Test;

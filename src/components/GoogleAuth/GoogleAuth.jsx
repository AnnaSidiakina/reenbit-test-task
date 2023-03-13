import React, { useState } from "react";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import { useSelector, useDispatch } from "react-redux";
import { selectUserIsLoggedIn } from "../../redux/auth/selectors";
import { selectUser } from "../../redux/auth/selectors";
import { login, logout } from "../../redux/auth/auth";
import { FcGoogle } from "react-icons/fc";
import styles from "./GoogleAuth.module.css";
import Container from "../Container/Container";

const GoogleAuth = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectUserIsLoggedIn);
  const dispatch = useDispatch();

  const googleLogin = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      const response = await axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${codeResponse.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          return { data: res.data, error: null };
        })
        .catch((error) => {
          return { data: null, error };
        });
      const { email, name } = response.data;
      dispatch(login({ email, name }));
    },
    onError: (error) => console.log("Something went wrong", error),
  });

  const googleLogout = () => {
    dispatch(logout());
  };

  return (
    <Container>
      <div className={styles.container}>
        {!isLoggedIn ? (
          <button className={styles.button} onClick={() => googleLogin()}>
            <FcGoogle />
            <span className={styles.span}>Sign in with Google</span>
          </button>
        ) : (
          <div className={styles.logoutContainer}>
            <p className={styles.name}>{user.name}</p>
            <button className={styles.button} onClick={googleLogout}>
              Log out
            </button>
          </div>
        )}
      </div>
    </Container>
  );
};
export default GoogleAuth;

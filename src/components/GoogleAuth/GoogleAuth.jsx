import React from "react";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import { useSelector, useDispatch } from "react-redux";
import { selectUserIsLoggedIn } from "../../redux/auth/selectors";
import { selectUser } from "../../redux/auth/selectors";
import { login, logout } from "../../redux/auth/auth";

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
      console.log(response.data);
      const { email, name } = response.data;
      dispatch(login({ email, name }));
    },
    onError: (error) => console.log("Something went wrong", error),
  });
  console.log(isLoggedIn);

  const googleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      {!isLoggedIn ? (
        <button onClick={() => googleLogin()}>Sign in with Google</button>
      ) : (
        <>
          <p>{user.name}</p>
          <button onClick={googleLogout}>Log out</button>
        </>
      )}
    </>
  );
};
export default GoogleAuth;

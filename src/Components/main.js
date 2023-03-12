import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Starting } from "./Starting";
import { useSelector, useDispatch } from "react-redux";
import { authStateChangeUser } from "../redux/auth/authOperations";
import { getUser } from "../redux/auth/authSelectors";

export const Main = () => {
  const dispatch = useDispatch();

  const { stateChange } = useSelector(getUser);
  const user = useSelector(getUser);
  console.log("🚀 ~ file: Main.js:13 ~ Main ~ user:", user);

  useEffect(() => {
    dispatch(authStateChangeUser());
  }, []);

  return (
    <NavigationContainer>
      <Starting isAuth={stateChange} />
    </NavigationContainer>
  );
};

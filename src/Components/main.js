import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Starting } from "./Starting";
import { useSelector, useDispatch } from "react-redux";
import { authStateChangeUser } from "../redux/auth/authOperations";

export const Main = () => {
  const dispatch = useDispatch();

  const { stateChange } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(authStateChangeUser());
  }, []);

  return (
    <NavigationContainer>
      <Starting isAuth={stateChange} />
    </NavigationContainer>
  );
};

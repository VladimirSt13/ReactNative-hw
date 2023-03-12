import { auth } from "../../../firebase/config";
import { authSlice } from "./authReducer";
const { authSighOut, updateUserProfile, authStateChange } = authSlice.actions;

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export const authSignUpUser =
  ({ login, email, password }) =>
  async (dispatch, getState) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(auth.currentUser, {
        displayName: login,
      });

      const { displayName, uid } = auth.currentUser;

      const userUpdatedProfile = {
        login: displayName,
        userId: uid,
      };

      dispatch(authSlice.actions.updateUserProfile(userUpdatedProfile));

      console.log(" authSignUpUser ~ user:", user);
    } catch (error) {
      console.log("authSignUpUser ~ error:", error);
      console.log("authSignUpUser ~ error.message:", error.message);
    }
  };

export const authSignInUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log("🚀 ~ file: authOperations.js:51 ~ error:", error);
    }
  };

export const authSignOutUser = () => async (dispatch, getState) => {
  console.log("authSignOutUser");
  await signOut(auth);
  dispatch(authSighOut());
};

export const authStateChangeUser = () => async (dispatch, getState) => {
  await onAuthStateChanged(auth, (user) => {
    if (user) {
      const userUpdatedProfile = {
        login: user.displayName,
        userId: user.uid,
      };
      dispatch(updateUserProfile(userUpdatedProfile));
      dispatch(authStateChange({ stateChange: true }));
    }
  });
};

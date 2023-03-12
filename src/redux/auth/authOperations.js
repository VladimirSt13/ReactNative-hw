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
  ({ login, email, password, avatar }) =>
  async (dispatch, getState) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(auth.currentUser, {
        displayName: login,
        photoURL: avatar ? avatar : `https://api.multiavatar.com/${email}.png`,
      });

      const { displayName, uid, photoURL } = auth.currentUser;

      const userUpdatedProfile = {
        userId: uid,
        login: displayName,
        email,
        avatar: photoURL,
      };

      dispatch(authSlice.actions.updateUserProfile(userUpdatedProfile));
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
      const { displayName, uid, photoURL } = auth.currentUser;

      const userUpdatedProfile = {
        userId: uid,
        login: displayName,
        email,
        avatar: photoURL,
      };

      dispatch(authSlice.actions.updateUserProfile(userUpdatedProfile));
    } catch (error) {
      console.log("🚀 ~ file: authOperations.js:51 ~ error:", error);
    }
  };

export const authSignOutUser = () => async (dispatch, getState) => {
  try {
    await signOut(auth);
    dispatch(authSighOut());
  } catch (error) {
    console.log(
      "🚀 ~ file: authOperations.js:70 ~ authSignOutUser ~ error:",
      error.message
    );
  }
};

export const authStateChangeUser = () => async (dispatch, getState) => {
  await onAuthStateChanged(auth, (user) => {
    if (user) {
      const userUpdatedProfile = {
        login: user.displayName,
        email: user.email,
        avatar: user.photoURL,
        userId: user.uid,
      };
      dispatch(updateUserProfile(userUpdatedProfile));
      dispatch(authStateChange({ stateChange: true }));
    }
  });
};

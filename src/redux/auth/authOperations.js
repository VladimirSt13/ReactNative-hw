import db from "../../../firebase/config";
import { authSlice } from "./authReducer";
const {authSighOut, updateUserProfile, authStateChange} = authSlice.actions

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const auth = getAuth(db);

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
        //TODO add user's avatar
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
      // console.log("authSignInUser ~ user:", user);
    } catch (error) {
      console.log("authSignInUser ~ error:", error);
      console.log("authSignInUser ~ error.message:", error.message);
    }
  };

export const authSignOutUser = () => async (dispatch, getState) => {
  console.log('authSignOutUser')
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

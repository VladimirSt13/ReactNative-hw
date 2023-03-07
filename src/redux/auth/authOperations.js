import db from "../../../firebase/config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth(db);

export const authSignUpUser =
  ({ login, email, password }) =>
  async (dispatch, getState) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(
        "🚀 ~ file: authOperations.js:7 ~ authSignUpUser ~ user:",
        user
      );
    } catch (error) {
      console.log(
        "🚀 ~ file: authOperations.js:8 ~ authSignUpUser ~ error:",
        error
      );
      console.log(
        "🚀 ~ file: authOperations.js:8 ~ authSignUpUser ~ error.message:",
        error.message
      );
    }
  };

export const authSignInUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(
        "🚀 ~ file: authOperations.js:34 ~ authSignInUser ~ user:",
        user
      );
    } catch (error) {
      console.log(
        "🚀 ~ file: authOperations.js:37 ~ authSignInUser ~ error:",
        error
      );
      console.log(
        "🚀 ~ file: authOperations.js:37 ~ authSignInUser ~ error.message:",
        error.message
      );
    }
  };

export const authSignOutUser = () => async (dispatch, getState) => {};

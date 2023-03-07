import db from "../../../firebase/config";

export const authSignUpUser =
  ({ login, email, password }) =>
  async (dispatch, getState) => {
    try {
      const user = await db
        .auth()
        .createUserWithEmailAndPassword(email, password);
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
export const authSignInUser = () => async (dispatch, getState) => {};

export const authSignOutUser = () => async (dispatch, getState) => {};

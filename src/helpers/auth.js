import { auth, googleProvider, facebookProvider, db } from "../firebase";
import CUSTOM_ERROR from "./errors";

const signInWithGoogle = async () => {
  try {
    const result = await auth.signInWithPopup(googleProvider);
    const user = result.user;
    const data = {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
    };
    const query = await db
      .collection("profile")
      .where("uid", "==", user.uid)
      .get();

    if (query.docs.length === 0) {
      await db.collection("profile").add(data);
    }
    return data;
  } catch (error) {
    return { error };
  }
};
const signInWithFacebook = async () => {
  try {
    const result = await auth.signInWithPopup(facebookProvider);
    const user = result.user;
    const data = {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
    };
    const query = await db
      .collection("profile")
      .where("uid", "==", user.uid)
      .get();
    if (query.docs.length === 0) {
      await db.collection("profile").add(data);
    }
    return data;
  } catch (error) {
    return { error };
  }
};
const registerWithEmailAndPassword = async () => {
  try {
    /*const res = await auth.createUserWithEmailAndPassword(
      "test@test.com",
      "123456"
    );*/
    /*const user = res.user;
      await db.collection("users").add({
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });*/
  } catch (err) {
    alert(err.message);
  }
};

const signInWithEmailAndPassword = async ({ email, password }) => {
  try {
    const res = await auth.signInWithEmailAndPassword(email, password);
    const user = res.user;
    const profile = await db
      .collection("profile")
      .where("uid", "==", user.uid)
      .get();
    return profile.docs;
  } catch (error) {
    if (CUSTOM_ERROR[error.code]) {
      return { error: { ...error, customError: CUSTOM_ERROR[error.code] } };
    }
    return { error };
  }
};

const logout = () => {
  try {
    console.log("fds");
    auth.signOut();
  } catch (err) {
    alert(err.message);
  }
};

export {
  signInWithGoogle,
  signInWithFacebook,
  registerWithEmailAndPassword,
  signInWithEmailAndPassword,
  logout,
};

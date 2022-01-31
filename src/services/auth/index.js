import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { getDatabase } from "firebase/database";
export class registration {
  constructor() {
    this.auth = getAuth();
    this.db = getDatabase();
  }
  async register(email, password, name) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      const user = userCredential.user;
      updateProfile(user, {
        displayName: name,
      })
        .then(() => {
          return user.displayName;
        })
        .catch((error) => {
          console.log(error);
        });
      return (user.displayName = name);
    } catch (error) {
      throw new Error(error);
    }
  }
  async authorization(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      const user = userCredential.user;
      return user.displayName;
    } catch (error) {
      throw new Error(error);
    }
  }

  async logOut() {
    try {
      // eslint-disable-next-line no-unused-vars
      const user = await signOut(this.auth);
    } catch (error) {
      throw new Error(error);
    }
  }
}

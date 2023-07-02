import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/config.js";

export const signUpUser = createAsyncThunk(
  "auth/signUpUser",
  async ({ login, email, password, avatar }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { uid, displayName, photoURL } = userCredential.user;

      await updateProfile(userCredential.user, {
        displayName: login,
        photoURL: avatar,
      });

      const userEmail = userCredential.user.email;

      return {
        userId: uid,
        login: displayName,
        email: userEmail,
        avatar: photoURL,
      };
    } catch (error) {
      console.log("error", error.message);
    }
  }
);

export const loginUser = createAsyncThunk('auth/loginUser', async ({ email, password }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const { uid, displayName, photoURL } = userCredential.user;
  
      const userEmail = userCredential.user.email;
  
      return {
        userId: uid,
        login: displayName,
        email: userEmail,
        avatar: photoURL,
      };
    } catch (error) {
      throw error;
    }
  });

  export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
    try {
      await signOut(auth);
    } catch (error) {
      throw error;
    }
  });

  export const trackAuthState = createAsyncThunk(
    'auth/trackAuthState',
    async (_, { dispatch }) => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid, displayName, email, photoURL } = user;
          dispatch(loginSuccess({ userId: uid, login: displayName, email, avatar: photoURL }));
        } else {
          dispatch(logout());
        }
      });
    }
  );

  export const updateUserAvatar = createAsyncThunk(
    'auth/updateUserAvatar',
    async (avatar, { dispatch }) => {
      try {
        if (auth.currentUser) {
          await updateProfile(auth.currentUser, {
            photoURL: avatar,
          });
  
          const { photoURL } = auth.currentUser;
  
          return { avatar: photoURL };
        }
      } catch (error) {
        dispatch(authError(error.message));
        throw error;
      }
    }
  );

  
  
  
  
  

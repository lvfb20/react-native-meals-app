import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EMAIL_IN_USE = 'auth/email-already-in-use';
const INVALID_EMAIL = 'auth/invalid-email';
const USER_DISABLED = 'auth/user-disabled';
const USER_NOT_FOUND = 'auth/user-not-found';
const WRONG_PASSWORD = 'auth/wrong-password';

const USER_STORAGE = 'user_storage';

const UserTarget = {
  register: async (values) => {
    const {email, password} = values;
    return auth()
      .createUserWithEmailAndPassword(email, password)
      .then((credentials) => {
        console.log('User account created & signed in!', credentials.user.email);
        return credentials.user.email;
      })
      .catch((error) => {
        if (error.code === EMAIL_IN_USE) {
          console.log('That email address is already in use!');
        }
        if (error.code === INVALID_EMAIL) {
          console.log('That email address is invalid!');
        }
        console.error(error);
        return null;
      });
  },
  login: async (values) => {
    const {email, password} = values;
    return auth()
      .signInWithEmailAndPassword(email, password)
      .then((credentials) => {
        const userData = {
          email: credentials.user.email,
          uid: credentials.user.uid,
        };
        return UserTarget.saveUserInStorage(userData);
      })
      .catch((error) => {
        let message = '';
        if (error.code === USER_DISABLED) {
          message =
            'The user corresponding to the given email has been disabled.';
        }
        if (error.code === USER_NOT_FOUND) {
          message = 'There is no user corresponding to the given email';
        }
        if (error.code === WRONG_PASSWORD) {
          message = 'The password is invalid for the given email';
        }
        return {error: {code: error.code, message}};
      });
  },
  saveUserInStorage: async (data) => {
    console.log('saveUserInStorage ->', data);
    if (data != null) {
      await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(data));
      return data;
    } else {
      throw new Error('Empty user data');
    }
  },
  getUserFromStorage: async () => {
    const userLocal = await AsyncStorage.getItem(USER_STORAGE);
    return JSON.parse(userLocal);
  },
};

export default UserTarget;

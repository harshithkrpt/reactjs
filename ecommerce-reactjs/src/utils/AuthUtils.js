import firebase from "../config/firebase";

export const signInUser = async (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function(error) {
      console.log(error);
    });
};

export const signUpUser = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
      console.log(error);
    });
};

export const userAuthStateChange = (setIsLogin, setUser) => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      setIsLogin(true);
      setUser({
        email: user.email,
        uid: user.uid,
        displayName: user.displayName,
        emailVerified: user.emailVerified,
        photoURL: user.photoURL
      });
    } else {
      setUser({});
      setIsLogin(false);
    }
  });
};

export const signOutUser = (setIsLogin, setUser) => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      setIsLogin(false);
      setUser({});
    })
    .catch(err => {
      console.log(err);
    });
};

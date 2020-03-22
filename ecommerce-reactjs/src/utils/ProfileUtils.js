import firebase from "../config/firebase";

export const sendVerificationEmail = (prevuser, setUser) => {
  const user = firebase.auth().currentUser;

  user
    .sendEmailVerification()
    .then(function() {
      setUser({
        ...prevuser
      });
    })
    .catch(function(err) {
      console.log(err);
    });
};

export const updateProfile = (prevuser, setUser, username, photoURL) => {
  const user = firebase.auth().currentUser;

  const obj = {};
  if (username) {
    obj.displayName = username;
  }
  if (photoURL) {
    obj.photoURL = photoURL;
  }

  user
    .updateProfile(obj)
    .then(() => {
      const updatedUser = { ...prevuser };
      if (username) {
        updatedUser.displayName = username;
      }

      if (photoURL) {
        updatedUser.photoURL = photoURL;
      }
      setUser(updatedUser);
    })
    .catch(err => {
      console.log(err);
    });
};

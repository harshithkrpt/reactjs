import firebase from "../config/firebase";
import db from "../config/db";

export const addToCart = cartItem => {
  const uid = firebase.auth().currentUser.uid;

  return db
    .collection("cart")
    .where("uid", "==", uid)
    .get()
    .then(snapshot => {
      if (snapshot.size === 0) {
        // Create the Cart Collection
        let products = [cartItem.id];
        return db.collection("cart").add({ uid, products });
      } else {
        //   Get The Previous snapshots and update
        let products;
        let id;
        snapshot.forEach(doc => {
          id = doc.id;
          products = doc.data().products;
        });
        if (products.includes(cartItem.id)) {
          throw Error("Cart Item Already Exists");
        }
        products = [...products, cartItem.id];
        return db
          .collection("cart")
          .doc(id)
          .update({
            uid,
            products
          });
      }
    })
    .catch(err => {
      console.log(err);
    });
};

export const getCartItems = () => {
  const uid = firebase.auth().currentUser.uid;

  return db
    .collection("cart")
    .where("uid", "==", uid)
    .get();
};

export const removeFromCart = cartItem => {
  const uid = firebase.auth().currentUser.uid;

  return db
    .collection("cart")
    .where("uid", "==", uid)
    .get()
    .then(snapshot => {
      if (snapshot.size !== 0) {
        let products;
        let id;
        snapshot.forEach(doc => {
          id = doc.id;
          products = doc.data().products;
        });

        // Filter the Product
        products = products.filter(product => product !== cartItem.id);
        return db
          .collection("cart")
          .doc(id)
          .update({
            uid,
            products
          });
      }
    })
    .catch(err => {
      console.log(err);
    });
};

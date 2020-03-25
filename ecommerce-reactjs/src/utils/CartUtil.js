import firebase from "../config/firebase";
import db from "../config/db";

export const addToCart = cartItem => {
  const uid = firebase.auth().currentUser.uid;
  return db
    .collection("cart")
    .where("uid", "==", uid)
    .get()
    .then(snapshot => {
      if (snapshot.size !== 0) {
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
      } else {
        // Create the Cart Collection
        let products = [cartItem.id];
        return db.collection("cart").add({ uid, products });
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

// Clear All Items from Cart
export const clearCart = callback => {
  const uid = firebase.auth().currentUser.uid;
  db.collection("cart")
    .where("uid", "==", uid)
    .get()
    .then(snapshot => {
      if (snapshot.size !== 0) {
        let id;
        snapshot.forEach(doc => {
          id = doc.id;
        });

        db.collection("cart")
          .doc(id)
          .update({
            uid,
            products: []
          })
          .then(() => {
            callback();
          });
      }
    })
    .catch(err => {
      console.log(err);
    });
};

export const getCartProducts = (cart, callback) => {
  const cartProducts = cart.map(id => {
    return db
      .collection("product")
      .doc(id)
      .get();
  });

  Promise.all(cartProducts).then(docs => {
    let items = docs.map(doc => {
      let obj = {};
      let data = doc.data();
      obj.id = doc.id;
      obj.imageLink = data.imageLink;
      obj.title = data.title;
      obj.prize = data.prize;
      return obj;
    });
    callback([...items]);
  });
};

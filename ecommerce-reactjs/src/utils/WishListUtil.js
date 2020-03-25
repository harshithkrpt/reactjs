import firebase from "../config/firebase";
import db from "../config/db";

export const addToWishList = cartItem => {
  const uid = firebase.auth().currentUser.uid;
  return db
    .collection("wishlist")
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
          .collection("wishlist")
          .doc(id)
          .update({
            uid,
            products
          });
      } else {
        // Create the Cart Collection
        let products = [cartItem.id];
        return db.collection("wishlist").add({ uid, products });
      }
    })
    .catch(err => {
      console.log(err);
    });
};

export const getWishListItems = () => {
  const uid = firebase.auth().currentUser.uid;
  return db
    .collection("wishlist")
    .where("uid", "==", uid)
    .get();
};

export const removeFromWishList = cartItem => {
  const uid = firebase.auth().currentUser.uid;
  return db
    .collection("wishlist")
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
          .collection("wishlist")
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

export const clearWishList = callback => {
  const uid = firebase.auth().currentUser.uid;
  db.collection("wishlist")
    .where("uid", "==", uid)
    .get()
    .then(snapshot => {
      if (snapshot.size !== 0) {
        let id;
        snapshot.forEach(doc => {
          id = doc.id;
        });

        db.collection("wishlist")
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

export const getWishListProducts = (wishList, callback) => {
  const wishListProducts = wishList.map(id => {
    return db
      .collection("product")
      .doc(id)
      .get();
  });

  Promise.all(wishListProducts)
    .then(docs => {
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
    })
    .catch(err => {
      console.log(err);
    });
};

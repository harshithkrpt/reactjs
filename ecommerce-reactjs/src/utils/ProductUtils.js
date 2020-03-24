import db from "../config/db";

export const getProduct = (id, callback) => {
  db.collection("product")
    .doc(id)
    .get()
    .then(doc => {
      if (!doc.exists) {
        throw Error("Id Not Found");
      }
      const { title, prize, imageLink } = doc.data();
      const obj = { title, prize, imageLink, id };
      callback(obj);
    })
    .catch(err => {
      console.log(err);
    });
};

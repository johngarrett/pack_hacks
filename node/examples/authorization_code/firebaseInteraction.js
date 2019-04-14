const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
    apiKey: 'AIzaSyBAMTvZISVKpaRlizJW4WBkUNatchMEKXo',
    authDomain: 'pack-hack.firebaseapp.com',
    projectId: 'pack-hack'
});

var db = firebase.firestore();

db.collection("clients").get().then((querySnapshot) => {
    console.log(querySnapshot)
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});
db.collection("users").add({
    first: "Alan",
    middle: "Mathison",
    last: "Turing",
    born: 1912
})
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
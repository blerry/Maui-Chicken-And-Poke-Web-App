// Initialize Cloud Firestore through Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, collection } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
//On deployment we write import { doc, getDoc, setDoc, collection } from "firebase/firestore"; 
const firebaseConfig = initializeApp({
    apiKey: "AIzaSyC095wM6mpg04Sm8I_whR8h-3QXSe22-b4",

    authDomain: "maui-chicken-and-poke.firebaseapp.com",
  
    projectId: "maui-chicken-and-poke",
  
    storageBucket: "maui-chicken-and-poke.appspot.com",
  
    messagingSenderId: "97093814083",
  
    appId: "1:97093814083:web:465d9be7fd04c4b7fed1f6",
  
    measurementId: "G-81FFTX4SBY"
});

//Backpage Login

//These are required instances when using database
//const app = initializeApp(firebaseConfig);
//initializeApp();
const db = getFirestore();

//Here's an example of getting data from database
async function getdata(db) {
    const docRef = doc(db,"test","orders");
    const stuff = collection(db, 'test');
    const stuffSnapshot = await getDoc(docRef);
    if (stuffSnapshot.exists()) {
        console.log("Document data:", stuffSnapshot.data());
        //const stuffList = stuffSnapshot.map(doc => doc.data());
        return stuffSnapshot.data();
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        return;
      }
  }
  getdata(db);

  //Adding data
  async function addData(db){
  const dataToAdd = await setDoc(doc(db, "cities", "LA"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA"
  });
}
  addData(db);

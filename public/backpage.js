// Initialize Cloud Firestore through Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";

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
const loginButton = document.getElementById("loginButton");
loginButton.addEventListener('click',()=>{
    var hiddenBackPage = document.getElementById("hiddenbackpage");
    let location =document.getElementById("locations").value;
    let loginText = document.getElementById("login_input").value;
    if(location == "one" && loginText=="111"){
        alert("successful log in");
        hiddenBackPage.innerHTML= ordersPage();
    }
    else if(location == "two" && loginText=="222"){
        alert("successful log in");
        hiddenBackPage.innerHTML= ordersPage();
    }
    else if(location == "three" && loginText=="333"){
        alert("successful log in");
        hiddenBackPage.innerHTML= ordersPage();
    }
    else{
        alert("invalid log in");
    }
}); 
//This function "returns" the orders and database stuff

const ordersPage= ()=> `<h2>Location</h2>
                        <h3>Order1</h3>
                        <p>description and stuff</p>
                        <h3>Order2</h3>
                        <p>item 2 description and stuff</p>`;
// document.addEventListener('readystatechange',function(){
//     if (document.readyState === "complete") {
//     login();
//     }
// });
//Here's an example of getting data from database
async function getdata(db) {
    const stuff = collection(db, 'test');
    const stuffSnapshot = await getDocs(citiesCol);
    const stuffList = citySnapshot.docs.map(doc => doc.data());
    return stuffList;
  }
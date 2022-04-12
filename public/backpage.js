// Initialize Cloud Firestore through Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore, doc,onSnapshot, getDoc, collection } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";

const firebaseConfig = initializeApp({
    apiKey: "AIzaSyC095wM6mpg04Sm8I_whR8h-3QXSe22-b4",

    authDomain: "maui-chicken-and-poke.firebaseapp.com",
  
    projectId: "maui-chicken-and-poke",
  
    storageBucket: "maui-chicken-and-poke.appspot.com",
  
    messagingSenderId: "97093814083",
  
    appId: "1:97093814083:web:465d9be7fd04c4b7fed1f6",
  
    measurementId: "G-81FFTX4SBY"
});
// read JSON object from file
// fs.readFile('order.json', 'utf-8', (err, data) => {
//     if (err) {
//         throw err;
//     }

//     // parse JSON object
//     const user = JSON.parse(data.toString());

//     // print JSON object
//     console.log(user);
// });

//get the location by doing something like
//var location = user.location;


//Backpage Login
//These are required instances when using database
//const app = initializeApp(firebaseConfig);
//initializeApp();
const db = getFirestore();
const loginButton = document.getElementById("loginButton");
const location = document.getElementById("locations").value;
var orderQueueHTML = ``;
loginButton.addEventListener('click',()=>{
    var hiddenBackPage = document.getElementById("hiddenbackpage");
    //const location = document.getElementById("locations").value;
    const loginText = document.getElementById("login_input").value;

    getData(db,location);

    if(location == "location1" && loginText=="111"){
        alert("successful log in");
        hiddenBackPage.innerHTML= orderQueueHTML;
    }
    else if(location == "location2" && loginText=="222"){
        alert("successful log in");
        hiddenBackPage.innerHTML= orderQueueHTML;
    }
    else if(location == "location3" && loginText=="333"){
        alert("successful log in");
        hiddenBackPage.innerHTML= orderQueueHTML;
    }
    else{
        alert("invalid log in");
    }
}); 

const getData = onSnapshot(doc(db, location, "orders"), (doc) => {
    console.log("Current data: ", doc.data());
    //const ord = JSON.stringify(doc.data());
    const orders = doc.data()["cart"];
    //console.log(orders);
    for (let i = 0; i<orders.length; i++){
        // console.log(orders[i].title);
        orderQueueHTML += `<h2>Location</h2><h3>Order1</h3><p>${orders[i].title}</p><h3>Order2</h3><p>item 2 description and stuff</p>`;
       
    }
    //console.log(orderQueueHTML);
    
});

//This function "returns" the orders and database stuff
const ordersPage = () => {
                        getData();
                        
                        };
// document.addEventListener('readystatechange',function(){
//     if (document.readyState === "complete") {
//     login();
//     }
// });
//Here's an example of getting data from database
// async function getData(db, loc) {
//     const location = loc;
//     const stuff = collection(db, location);
//     const stuffSnapshot = await getDocs("orders");
//     const stuffList = stuffSnapshot.docs.map(doc => doc.data());
//     return stuffList;
//   }

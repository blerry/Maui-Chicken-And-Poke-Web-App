// Initialize Cloud Firestore through Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore, doc,onSnapshot, getDoc, collection, query, where } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";

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
var orderNumber = 0;
var orderQueueHTMLArray = [`<h2>Location: ${location}</h2>`];
var orderQueueHTML = ``;
const getOrderNumber = onSnapshot(doc(db,location, "orderCount"), (doc) =>{
    orderNumber = doc.data().count;
    console.log("Order Count: ", doc.data().count);
});

//Add Event click listeners to delete the items from order Queue

// const getData = onSnapshot(doc(db, location, "orders"), (doc) => {
    
//     console.log("Current data: ", doc.data());
//     //const ord = JSON.stringify(doc.data());
//     const itemsInOrder = doc.data()["cart"]; //array
//     orderQueueHTML += `<h3>Order #:  ${orderNumber}, Name: ${itemsInOrder[0].name}</h3><p>Notes ${itemsInOrder[0].notes}</p><button id= ${orderNumber}>DELETE</button>`;
//     //console.log(orders);
//     for (let i = 0; i<itemsInOrder.length; i++){
//         // console.log(orders[i].title);
//         orderQueueHTML += `<p>${itemsInOrder[i].title}</p>`;
//     }
//     //console.log(orderQueueHTML);
    
// });

//Better Version
const q = collection(db, location); // q is Query
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  var orders = [];
  querySnapshot.forEach((doc) => {
      if(doc.id != "orderCount"){
      //let itemsInOrder = doc.data()["cart"];
      //console.log(itemsInOrder[0]);
      orders.push(doc.data()["cart"]);//push orders. [0] = doc.data()["cart"]
      //update orderQueue HTML to fit new order
      orderQueueHTMLArray.push(`<h3>Order #:  ${doc.id}, Name: ${doc.data()["cart"][0].name}</h3><p>Notes ${doc.data()["cart"][0].notes}</p><button id= ${doc.id}>DELETE</button>`);
      for(items in doc.data()["cart"]){
          orderQueueHTMLArray.push(`<p></p>`);
      }
      //add Order details: Price+Title
      //add EventListener
      //const removeOrderButton = document.getElementById(doc.id.toString());
    //   removeOrderButton.addEventListener('click', ()=> {
    //       //delete from html string, delete from database, update html
    //   });
      }
  });
  console.log("Current orders in Location1: ", orders);
});


loginButton.addEventListener('click',()=>{
    var hiddenBackPage = document.getElementById("hiddenbackpage");
    //const location = document.getElementById("locations").value;
    const loginText = document.getElementById("login_input").value;
    orderNumber = getOrderNumber();
    //getData(db,location);

    //Add Event click listeners to delete the items from order Queue
    // for (let i = 0; i < menu.length; i++){
    //     let addItemId = menu[i].id + "addBtn" // <button id="${item.id}addBtn">
    //     menuItemElements[i] = document.getElementById(addItemId).addEventListener("click", () => { addToCart(menu[i]); });
    //   }
    for(let i = 0; i < orderQueueHTMLArray.length-1; i++){
           orderQueueHTML += orderQueueHTMLArray[i]; 
    }

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

//This function "returns" the orders and database stuff
// const ordersPage = () => {
//                         getData();
                        
//                         };
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

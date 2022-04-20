// Initialize Cloud Firestore through Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore, doc,onSnapshot, collection,deleteDoc } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";

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
let locate = document.getElementById("locations").value;
var orderNumber = 0;
var ordersInQueue = [];
var orderQueueHTMLArray = [`<h2>Location: ${locate}</h2>`];
var orderQueueHTML = ``;

const getOrderNumber = onSnapshot(doc(db,locate, "orderCount"), (doc) =>{
    orderNumber = doc.data().count;
    console.log("Order Count: ", doc.data().count);
});

//Better Version
const q = collection(db, locate); // q is Query
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  
  querySnapshot.forEach((doc) => {
      if(doc.id != "orderCount"){
      let itemsInOrder = doc.data()["cart"];
      console.log(itemsInOrder[0]);
      //update orderQueue HTML to fit new order
      orderQueueHTMLArray.push(`<div id=${doc.id}>`);//Start of Div
      orderQueueHTMLArray.push(`<h3>Order #:  ${doc.id}, Name: ${doc.data()["cart"][0].name}</h3><p>Notes ${doc.data()["cart"][0].notes} Total: ${doc.data()["cart"][0].total}</p><button id= "btn${doc.id}">DELETE</button>`);
      ordersInQueue.push(doc.id);//each index is an order in queue
      for(let i = 1; i < doc.data()["cart"].length; i++){
        orderQueueHTMLArray.push(`<p>${doc.data()["cart"][i].title}</p><p>Quantity: ${doc.data()["cart"][i].quantity}</p>`);
       }
       orderQueueHTMLArray.push(`</div>`);//End of Div
      }    
  });
  //console.log("Current orders in Location1: ", orders);
});

//add Button EventListeners
const removeBtnListeners = async(orders) => {
    console.log("orders"+orders);
    console.log("order Length"+ orders.length);
    const resolveAfter2Seconds = (x) => { //We have to wait for order elements to load first
        return new Promise((resolve) => { setTimeout(() => {resolve(x); }, 1000);});
    }
    await resolveAfter2Seconds(10);    
    for(let i = 0; i < orders.length;i++){
        let id =  orders[i].toString();
        //let buttonID = "btn"+ indexOf(orders[i]);
        let removeOrderButton = document.getElementById("btn"+id);
        console.log(removeOrderButton);
        if(removeOrderButton != null){
            console.log("These items got listeners "+id);
             removeOrderButton.addEventListener('click', ()=> {
                //deleteDoc();
               document.getElementById(id).hidden=true;//remove div, hide order from html
                 });
        }else{
            console.log("These items are null "+id);
            continue;
        }
     }
};

loginButton.addEventListener('click',()=>{
    let location = document.getElementById("locations").value;
    var hiddenBackPage = document.getElementById("hiddenbackpage");
    //const location = document.getElementById("locations").value;
    const loginText = document.getElementById("login_input").value;
    orderNumber = getOrderNumber();

    for(let i = 0; i < orderQueueHTMLArray.length-1; i++){
           orderQueueHTML += orderQueueHTMLArray[i]; 
    }

    if(location == "location1" && loginText=="111"){
        alert("successful log in");
        hiddenBackPage.innerHTML= orderQueueHTML; //update HTML
        removeBtnListeners(ordersInQueue); //add button event listeners
    }
    else if(location == "location2" && loginText=="222"){
        alert("successful log in");
        hiddenBackPage.innerHTML= orderQueueHTML;
        removeBtnListeners(ordersInQueue);
    }
    else if(location == "location3" && loginText=="333"){
        alert("successful log in");
        hiddenBackPage.innerHTML= orderQueueHTML;
        removeBtnListeners(ordersInQueue);
    }
    else{
        alert("invalid log in");
    }
}); 

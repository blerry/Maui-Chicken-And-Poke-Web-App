// Initialize Cloud Firestore through Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore, doc,onSnapshot, collection,deleteDoc,getDoc } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";

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
var orderQueueHTMLArray = [];
var orderQueueHTML = ``;
//let loggedIn = false;//flag to check if user is logged in

const getOrderNumber = onSnapshot(doc(db,locate, "orderCount"), (doc) =>{
    orderNumber = doc.data().count;
    console.log("Order Count: ", doc.data().count);
});

//Better Version
//If logged in is true, then pass the location to getOrders()
function getOrders(loc){ //loc is location
    const q = collection(db, loc); // q is Query
    //const unsubscribe = 
    onSnapshot(q, (querySnapshot) => {
    //orderQueueHTMLArray.push(`<h2>Location: ${loc}</h2>`);
    orderQueueHTMLArray.push(`<h2 id="hi">Orders</h2>`);
    querySnapshot.forEach((doc) => {
    if(doc.id != "orderCount" && doc){
        let itemsInOrder = doc.data()["cart"];
        console.log(itemsInOrder[0]);
        //update orderQueue HTML to fit new order
        orderQueueHTMLArray.push(`<div id=${doc.id}>`);//Start of Div
        orderQueueHTMLArray.push(`<h3>Order #:  ${doc.id}, Name: ${doc.data()["cart"][0].name}</h3><p>Notes ${doc.data()["cart"][0].notes} Total: ${doc.data()["cart"][0].total}</p><button id= "btn${doc.id}"onclick="remove()">DELETE</button>`);
        ordersInQueue.push(doc.id);//each index is an order in queue
        for(let i = 1; i < doc.data()["cart"].length; i++){
            orderQueueHTMLArray.push(`<p>${doc.data()["cart"][i].title}</p><p>Quantity: ${doc.data()["cart"][i].quantity}</p>`);
        }
        orderQueueHTMLArray.push(`</div>`);//End of Div
            }  
        });
        var hiddenBackPage = document.getElementById("hiddenbackpage");
        for(let i = 0; i < orderQueueHTMLArray.length-1; i++){
        orderQueueHTML += orderQueueHTMLArray[i]; //fills html elements with orders
        }
        hiddenBackPage.innerHTML= orderQueueHTML; //update HTML
    });
    }

//add Button EventListeners
const removeBtnListeners = async(orders,locate) => {
    console.log("orders"+orders);
    console.log("order Length"+ orders.length);
    const resolveAfter2Seconds = (x) => { //We have to wait for order elements to load first
        return new Promise((resolve) => { setTimeout(() => {resolve(x); }, 1000);});
    }
    await resolveAfter2Seconds(10);    
    document.getElementById("hi").addEventListener('click', ()=>{
        document.getElementById("hi").hidden=true;
    });
    for(let i = 0; i < orders.length;i++){
        let id =  orders[i].toString();
        //let buttonID = "btn"+ indexOf(orders[i]);
        let removeOrderButton = document.getElementById("btn"+id);
        console.log(removeOrderButton);
        if(removeOrderButton != null){
            console.log("These items got listeners "+id);
             removeOrderButton.addEventListener('click', ()=> {
                document.getElementById(id).hidden=true;//remove div, hide order from html
                const deleteOrder = async() => {await deleteDoc(doc(db, locate, id));}; //deletes order from Database
                deleteOrder(); // need to call
                console.log("order deleted");
               
                 });
        }else{
            console.log("These items are null "+id);
            continue;
        }
     }
};

//If its a new day then change orderCount to 0;
const resetOrderNumber=()=>{
    const getOrderNum = async() => {
        let docSnap = await getDoc(doc(db,locate,"orderCount"));
        oNum = docSnap.data().count;
        date1 = docSnap.data().date;
        //console.log("The number" + orderNum);
        };
        getOrderNum();
        setTimeout(()=>{ 
        //console.log("Order # " + orderNum);//Rest of code goes here because of asyncy getOrderNum
        let date2 = new Date();
        let day1 = date1.split(" ");
        //date.setTime(date.getTime() + (30*24*60*60*1000));//30 days,24hours,60 minutes
        date2 = date2.toUTCString();
        let day2 = date2.split(" ");
        const updateOrderCount = async() => {await setDoc(doc(db,locate,"orderCount"),{
            count:0,
            date:date2  
        },1000)};
        if (day1[1] < day2[1]){
            updateOrderCount(); //If its a new day. OrderCount = 0 
        } 
    });
}
//resetOrderNumber();// before any log ins
loginButton.addEventListener('click',()=>{
    let locate = document.getElementById("locations").value;
    var hiddenBackPage = document.getElementById("hiddenbackpage");
    const loginText = document.getElementById("login_input").value;
    orderNumber = getOrderNumber();

    // for(let i = 0; i < orderQueueHTMLArray.length-1; i++){
    //        orderQueueHTML += orderQueueHTMLArray[i]; //fills html elements with orders
    // }

    if(locate == "location1" && loginText=="111"){
        alert("successful log in");
        getOrders(locate);
        //setTimeout(2000);
    
        removeBtnListeners(ordersInQueue,locate); //add button event listeners
        
    }
    else if(locate == "location2" && loginText=="222"){
        getOrders(locate);
        alert("successful log in");
        hiddenBackPage.innerHTML= orderQueueHTML;
        removeBtnListeners(ordersInQueue,locate);
        //checkDate();
    }
    else if(locate == "location3" && loginText=="333"){
        getOrders(locate);
        alert("successful log in");
        hiddenBackPage.innerHTML= orderQueueHTML;
        removeBtnListeners(ordersInQueue,locate);
        //checkDate();
    }
    else{
        alert("invalid log in");
    }
}); 

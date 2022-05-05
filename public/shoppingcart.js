import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore,doc,setDoc,getDoc } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC095wM6mpg04Sm8I_whR8h-3QXSe22-b4",

  authDomain: "maui-chicken-and-poke.firebaseapp.com",

  projectId: "maui-chicken-and-poke",

  storageBucket: "maui-chicken-and-poke.appspot.com",

  messagingSenderId: "97093814083",

  appId: "1:97093814083:web:465d9be7fd04c4b7fed1f6",

  measurementId: "G-81FFTX4SBY"

};

const app = initializeApp(firebaseConfig);

//Change for Deleting an item
function eraseCookie() {
  let cookie = "order=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  document.cookie = cookie;
  console.log(document.cookie);
}
//Works, returns the value of the Cookie, in this case a JSON String array of objects
const getCookie = () => {
  let name = "order" + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let cookieString = decodedCookie.split(';');
  for(let i = 0; i < cookieString.length; i++) {
    let c = cookieString[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      let cartJSON = c.substring(name.length, c.length); //cart as json array of objects
      let cart = JSON.parse(cartJSON);
      console.log(cartJSON);
      return cart;
      //return c.substring(name.length, c.length); // this is the cart
    }
  }
  return "";
};
const sectionCenter = document.querySelector(".section-center");

var cart = getCookie();

const db = getFirestore();

var total = 0.0;
var taxTotal = 0.0;
//Time to Load these to the page.

function displayCartItems(cart){
  let displayCart = cart.map(function (item) {
    total += (item.quantity * item.price);
    //total += item.price;
    // console.log(item);
    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info" id="${item.id}">
            <header>
              <h4 class="title">${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
              <h4 class="quantity">Quantity: ${item.quantity}</h4>
            </header> 
          </div>
            <button id="${item.id}addBtn">Delete From Cart </button>
        </article>`;
  });
  displayCart = displayCart.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayCart;
}

window.addEventListener("DOMContentLoaded", () => {
  displayCartItems(cart);
  document.getElementById("deleteCartBtn").addEventListener('click', ()=>{
    eraseCookie(); 
    location.reload();
  }); //event listener for deleting cart
  //Pass Total after displaying Cart
  //Hide Receipt
  document.getElementById("receiptDiv").hidden = true;
  taxTotal = parseFloat((total * 0.0925).toFixed(2));
  total = parseFloat((total + taxTotal).toFixed(2));
  document.getElementById("taxTotal").innerHTML = "Tax: $ " + taxTotal;
  document.getElementById("orderTotal").innerHTML = "Total: $ " + total;
  //loadReceipt();
});
// Receipt Creation is here
// const loadReceipt = () => {
//   `<h2>Thank You for Shopping</h2>
//   <h2>Please wait for your order to be Called.</h2>`
// };

//Use setTimeout to continue to add the order to database
async function addData(db){ //Add Data to the database to add to Order Queue
  const notes = document.getElementById("notes").value;
  const name = document.getElementById("name").value;
  const locate = document.getElementById("locations").value;
  //cart.name = name; //Adding Name of person order to cart
  //cart.notes = notes;
  let orderNum = 0;
  const getOrderNum = async() => {
      let docSnap = await getDoc(doc(db,locate,"orderCount"));
      orderNum = docSnap.data().count;
      console.log("The number" + orderNum);
    };
  getOrderNum();
  setTimeout(()=>{ 
    console.log("Order # " + orderNum);//Rest of code goes here because of asyncy getOrderNum
    let date = new Date();
    date.setTime(date.getTime() + (30*24*60*60*1000));//30 days,24hours,60 minutes
    date = date.toUTCString();
    
    const updateOrderCount = async() => {await setDoc(doc(db,locate,"orderCount"),{
      count:orderNum+1,
      date:date  
    })};
    updateOrderCount(); //Increment OrderNumber after we got it.
    cart.unshift({name: name,notes: notes,total:total});//Adding order details to beginning of cart
    //WORKS but be careful
    const dataToAdd = async() => {await setDoc(doc(db, locate, orderNum.toString()), {cart}) }; //order is an object array {[]}
    dataToAdd(); // need to call
    loadReceipt(orderNum,cart);
    eraseCookie(); //erase cookie afterward
  }, 1000);//must wait 1sec to get the OrderNumber
}
const checkOutButton = document.getElementById("checkoutBtn").addEventListener("click",
function loadCheckOutPage(){
  if(confirm("Proceed to checkout? ")){
    //checkOutButton.hidden=true;
    //loadReceipt();
    addData(db);
    //const receiptHTML = document.getElementById("receiptHTML");
    //const displayReceipt = loadReceipt;
    //displayReceipt = displayReceipt.join("");
    //receiptHTML.innerHTML = displayReceipt;




    
    return "";
  }
  else{
    return;
  }
});

//loadReceipt = 

// Receipt
//window.onload = function () {
function loadReceipt(orderNum,cartt){
  //document.hidden = false;
  document.getElementById("receiptDiv").hidden = false;
  const notes = document.getElementById("notes").value;
  const name = document.getElementById("name").value;
  let locat = document.getElementById("locations").value;
  if (locat == "location1") locat = "2100 Redondo Beach Blvd. #A Torrance, CA 90504";
  else if (locat == "location2") locat ="4509 Sepulveda Blvd. Torrance, CA 90505";
  else if (locat == "location2") locat ="29217 S. Western Ave. Rancho Palos Verdes, CA 90275";
  document.getElementById("rOrderNum").innerHTML = "Order #:" + orderNum;
  let date = new Date();
  document.getElementById("rDate").innerHTML = date;
  document.getElementById("rLocation").innerHTML = locat;
  document.getElementById("rtaxTotal").innerHTML = taxTotal;
  document.getElementById("rTotal").innerHTML = total;
  let cartItems = document.getElementsByClassName("list list-unstyled mb-0 text-left");
  let htmlItems = "";
  console.log("THE CART")
  console.log(cartt);
  for(let i = 1; i < cartt.length; i++){
    htmlItems +="<li> - " + cartt[i].title + "</li>";
     
  }
  cartItems[1].innerHTML = htmlItems;
  document.getElementsByClassName("my-2")[0].innerHTML = "Name: " + name;
  document.getElementById("rLocation").innerHTML = locat;

  document.getElementById("download")
      .addEventListener("click", () => {
          //const invoice = this.document.getElementById("invoice");
          const invoice = document.getElementById("invoice");
          console.log(invoice);
          console.log(window);
          var opt = {
              margin: 1,
              filename: 'myfile.pdf',
              image: { type: 'jpeg', quality: 0.98 },
              html2canvas: { scale: 2 },
              jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
          };
          html2pdf().from(invoice).set(opt).save();
      })
}

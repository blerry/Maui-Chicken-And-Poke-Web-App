import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore,doc,setDoc } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";

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

function setCookie(cart) {
  const date = new Date();
  date.setTime(date.getTime() + (30*24*60*60*1000));//30 days,24hours,60 minutes
  let expires = "expires=" + date.toUTCString();
  //let cookie = name, '=', JSON.stringify(cart), '; domain=', window.location.host.toString(), '; path=/menu.html;'.join('');
  //name, value, expiration
  let cookie = "order" + "=" + JSON.stringify(cart) + ";" + expires + ";path=/";
  //document.cookie = JSON.stringify(cart);
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

//Time to Load these to the page.

function displayCartItems(cart){
  let displayCart = cart.map(function (item) {
    // console.log(item);
    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info" id="${item.id}">
            <header>
              <h4>${item.title}</h4>
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
  //          ADD Event Listeners after cart is displayed here

});


//Function that displays CheckoutPage if clicked. 

//Add Data to the database to add to Order Queue
async function addData(db){
  const dataToAdd = await setDoc(doc(db, "cities", "LA"), {
    //Adding the Cart data here
    name: "Long Beach",
    state: "CA",
    country: "USA"
  });
}

const checkOutButton = document.getElementById("checkoutBtn").addEventListener("click",
function loadCheckOutPage(){
  if(confirm("Proceed to checkout? ")){
    addData(db);
    return "";
  }
  else{
    return;
  }
});




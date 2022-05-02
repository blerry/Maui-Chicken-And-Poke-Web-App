import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";

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

var dairy = "./images/dairy.jpg";
var egg = "./images/egg.png";
var wheat = "./images/wheat.png";
var sesame = "./images/sesame.png";
var soy = "./images/soy.png";
var shellfish = "./images/shellfish.png";
var seafood = "./images/seafood.png";
var pork = "./images/pork.png";
var beef = "./images/beef.png";
var poultry = "./images/poultry.jpg";

const menu = [
  {
    id: 1,
    title: "Chicken Teriyaki",
    category: "Teriyaki",
    price: 7.99,
    img: "./images/item-1.jpeg",
    desc: 'All-natural, marinated chicken thighs grilled to perfection covered in our sweet teriyaki sauce and sesame seeds!',
    content1: sesame,
    content2: soy,
    content3: poultry,
    content4: null,
    content5: null,
    content6: null,
  },
  {
    id: 2,
    title: "Steak Teriyaki",
    category: "Teriyaki",
    price: 10.99,
    img: "./images/item-2.jpeg",
    desc: 'Excellent certified Angus flap steak, marinated and grilled that will leave your mouth watering, topped with our sweet teriyaki sauce and sesame seeds!',
    content1: sesame,
    content2: soy,
    content3: beef,
    content4: null,
    content5: null,
    content6: null,
  },
  {
    id: 3,
    title: "Combo (Chicken & Steak)",
    category: "Teriyaki",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: 'The best of both teriyakis: chicken and steak!',
    content1: egg,
    content2: wheat,
    content3: sesame,
    content4: soy,
    content5: beef,
    content6: poultry,
  },
  {
    id: 4,
    title: "Chicken Katsu",
    category: "Katsu",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: 'Tender white meat chicken, deep-fried and served with our tangy katsu sauce!',
    content1: egg,
    content2: wheat,
    content3: sesame,
    content4: soy,
    content5: poultry,
    content6: null,
  },
  {
    id: 5,
    title: "Chicken Katsu & Chicken Teriyaki",
    category: "Katsu",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: 'Both our delicious chicken katsu and scrumptious chicken teriyaki!',
    content1: egg,
    content2: wheat,
    content3: sesame,
    content4: soy,
    content5: poultry,
    content6: null,
  },
  {
    id: 6,
    title: "Chicken Katsu & Steak Teriyaki",
    category: "Katsu",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: 'The perfect combination of crispy chicken and tender steak!',
    content1: egg,
    content2: wheat,
    content3: sesame,
    content4: soy,
    content5: beef,
    content6: poultry,
  },
  {
    id: 7,
    title: "Sweet Hawaiian Fried Chicken",
    category: "Katsu",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: 'Boneless Fried Chicken fried and tossed with our sweet garlic sauce!',
    content1: egg,
    content2: wheat,
    content3: sesame,
    content4: soy,
    content5: poultry,
    content6: null,
  },
  {
    id: 8,
    title: "Salmon Teriyaki",
    category: "Fish",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: 'A beautifully grilled salmon filet topped with our sweet teriyaki sauce and sesame seeds!',
    content1: sesame,
    content2: soy,
    content3: seafood,
    content4: null,
    content5: null,
    content6: null,
  },
  {
    id: 9,
    title: "Garlic Shrimp",
    category: "Fish",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: 'Delicious jumbo shrimp sautéed in their shells in butter and garlic and finished with a sprinkle of green onion!',
    content1: dairy,
    content2: sesame,
    content3: soy,
    content4: shellfish,
    content5: null,
    content6: null,
  },
  {
    id: 10,
    title: "Fried Shrimp",
    category: "Fish",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: 'Our delicious Jumbo shrimp battered and fried until golden!',
    content1: wheat,
    content2: sesame,
    content3: shellfish,
    content4: null,
    content5: null,
    content6: null,
  },
  {
    id: 11,
    title: "Bacon Fried Rice",
    category: "Island",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: 'Savory bacon and rice stir-fried along with egg and green onion!',
    content1: dairy,
    content2: egg,
    content3: sesame,
    content4: soy,
    content5: pork,
    content6: null,
  },
  {
    id: 12,
    title: "Spam Fried Rice",
    category: "Island",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: 'Yummy Spam and rice stir-fried along with egg and green onion!',
    content1: dairy,
    content2: egg,
    content3: sesame,
    content4: soy,
    content5: pork,
    content6: null,
  },
  {
    id: 13,
    title: "Spam and Egg",
    category: "Island",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: 'Delicious sliced Spam scrambled with egg and green onion and served on top of rice!',
    content1: dairy,
    content2: egg,
    content3: sesame,
    content4: soy,
    content5: pork,
    content6: null,
  },
  {
    id: 14,
    title: "BBQ Short Rib Bowl (Kalbi)",
    category: "Island",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: 'Tender, marinated beef short ribs grilled to mouth-watering perfection!',
    content1: sesame,
    content2: soy,
    content3: beef,
    content4: null,
    content5: null,
    content6: null,
  },
  {
    id: 15,
    title: "Tuna Poke",
    category: "Poke",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: 'Bluefin ahi tuna mixed with avocado, green onion, togarashi, shoyu, and sesame oil, topped with seaweed salad and white ginger!',
    content1: sesame,
    content2: soy,
    content3: seafood,
    content4: null,
    content5: null,
    content6: null,
  },
  {
    id: 16,
    title: "Salmon Poke",
    category: "Poke",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: 'Delicious salmon mixed with avocado, green onion, togarashi, shoyu, and sesame oil, topped with seaweed salad and white ginger!',
    content1: sesame,
    content2: soy,
    content3: seafood,
    content4: null,
    content5: null,
    content6: null,
  },
  {
    id: 17,
    title: "Rainbow Poke",
    category: "Poke",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: 'Both Tuna and Salmon mixed with avocado, green onion, togarashi, shoyu, and sesame oil, topped with seaweed salad and white ginger!',
    content1: sesame,
    content2: soy,
    content3: seafood,
    content4: null,
    content5: null,
    content6: null,
  },
  {
    id: 18,
    title: "Wonton Soup",
    category: "Soup",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: 'Savory pork wonton with egg and served with a side of rice!',
    content1: egg,
    content2: pork,
    content3: null,
    content4: null,
    content5: null,
    content6: null,
  },
  {
    id: 19,
    title: "Seafood Soup",
    category: "Soup",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: 'Flavorful shrimp and salmon soup served with a side of rice!',
    content1: shellfish,
    content2: seafood,
    content3: null,
    content4: null,
    content5: null,
    content6: null,
  },
  {
    id: 20,
    title: "Chicken Katsu Ramen",
    category: "Soup",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: 'Crispy chicken katsu with tender ramen noodles in beef broth!',
    content1: wheat,
    content2: sesame,
    content3: soy,
    content4: beef,
    content5: poultry,
    content6: null,
  },
  {
    id: 21,
    title: "Seafood Ramen",
    category: "Soup",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: 'Flavorful shrimp and salmon served with tender ramen noodles!',
    content1: sesame,
    content2: soy,
    content3: shellfish,
    content4: seafood,
    content5: null,
    content6: null,
  }, 
  {
    id: 22,
    title: "Kalbi Ramen",
    category: "Soup",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: 'Delicious marinated beef short rib served with tender ramen noodles!',
    content1: sesame,
    content2: soy,
    content3: beef,
    content4: null,
    content5: null,
    content6: null,
  }, 
  {
    id: 23,
    title: "Chinese Chicken Salad",
    category: "Salad",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: 'Romaine lettuce, hand-shredded white meat chicken, and wonton chips with our delicious sesame dressing!',
    content1: sesame,
    content2: soy,
    content3: poultry,
    content4: null,
    content5: null,
    content6: null,
  }, 
  {
    id: 24,
    title: "Half-Tray Chinese Chicken Salad",
    category: "Salad",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: 'Feeds 12-14 people',
    content1: sesame,
    content2: soy,
    content3: poultry,
    content4: null,
    content5: null,
    content6: null,
  },
  {
    id: 25,
    title: "Full-Tray &nbsp&nbsp&nbsp Chinese Chicken Salad",
    category: "Salad",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: 'Feeds 23-25 people',
    content1: sesame,
    content2: soy,
    content3: poultry,
    content4: null,
    content5: null,
    content6: null,
  },
  {
    id: 26,
    title: "Spam Musubi &nbsp (2 pieces)",
    category: "Sides",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: 'A Hawaiian classic: sliced Spam wrapped in rice and dried seaweed!',
    content1: sesame,
    content2: pork,
    content3: null,
    content4: null,
    content5: null,
    content6: null,
  },
  {
    id: 27,
    title: "Gyoza (6 pieces)",
    category: "Sides",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: 'Pork-filled and fried until crispy and served with our gyoza sauce!',
    content1: sesame,
    content2: soy,
    content3: pork,
    content4: null,
    content5: null,
    content6: null,
  },
  {
    id: 28,
    title: "Mac Salad",
    category: "Sides",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: '2 heaping scoops of our delicious potato macaroni salad!',
    content1: egg,
    content2: null,
    content3: null,
    content4: null,
    content5: null,
    content6: null,
  },
  {
    id: 29,
    title: "Mac Salad",
    category: "Sides",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: '2 heaping scoops of our delicious potato macaroni salad!',
    content1: egg,
    content2: null,
    content3: null,
    content4: null,
    content5: null,
    content6: null,
  },

];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info" id="${item.id}">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
              <!-- You add a quantity and add button -->
              
            </header>
            <p class="item-text">
              ${item.desc}
            </p>

            <img src=${item.content1} alt="" class="item-content" />
            <img src=${item.content2} alt="" class="item-content" />
            <img src=${item.content3} alt="" class="item-content" />
            <img src=${item.content4} alt="" class="item-content" />
            <img src=${item.content5} alt="" class="item-content" />
            <img src=${item.content6} alt="" class="item-content" />

            
          </div>
          <div class="quanitiyInfo">
            <select name="quantity" id="${item.id}quantity">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button class="button" id="${item.id}addBtn">Add to Cart</button>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}

const menuItemElements = new Array(menu.length);

  var cart = [];



  //cart.push(menu[29]);
  //button clicked. Find the button 

  // Getting the menu item ID to find the elements then
  // Adding Event Listeners to all menuItems
  // And Passing the parameter menu[i] which is the item to be added to shopping cart
  // Item is added to shopping cart when add to cart button is clicked. (look at addToCart())
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
  // function getCookie() {
  //   //let decodedCookie = decodeURIComponent(document.cookie);
  //   //let cart = JSON.parse(decodedCookie);
  //   let name = "order"
  //   let result = document.cookie.match(new RegExp(name + '=([^;]+)'));
  //   result && (result = JSON.parse(result[1]));
  //   return cart;
  // }

  function addToCart(itemSelected) {
    //itemSelected = (menu[i]);
    let quantitySelected = document.getElementById(itemSelected.id+"quantity").value; // id="${item.id}quantity">
    console.log(quantitySelected);
    let itemToAdd = {
        id: itemSelected.id,
        title: itemSelected.title,
        img: itemSelected.img,
        price: itemSelected.price,
        quantity: quantitySelected
    }
    cart.push(itemToAdd);
    console.log(cart[0]);
    setCookie(cart);
  }


  async function addEventListeners(){
    const resolveAfter2Seconds = (x) => { //We have to wait for menu elements to load first
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(x);
        }, 2000);
      });
    }
    await resolveAfter2Seconds(10);
    for (let i = 0; i < menu.length; i++){
      let addItemId = menu[i].id + "addBtn" // <button id="${item.id}addBtn">
      menuItemElements[i] = document.getElementById(addItemId).addEventListener("click", () => { addToCart(menu[i]); });
      //console.log(menu[i]);
    }

    //Get Cookies after even Listerners
    //getCookie();

  }

  addEventListeners();



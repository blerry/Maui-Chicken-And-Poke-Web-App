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

const menu = [
  {
    id: 1,
    title: "Chicken Teriyaki",
    category: "Teriyaki",
    price: 7.99,
    img: "./images/item-1.jpeg",
    desc: 'All-natural, marinated chicken thighs grilled to perfection covered in our sweet teriyaki sauce and sesame seeds!',
    content: 'Contains: poultry, sesame, soy',
  },
  {
    id: 2,
    title: "Steak Teriyaki",
    category: "Teriyaki",
    price: 10.99,
    img: "./images/item-2.jpeg",
    desc: 'Excellent certified Angus flap steak, marinated and grilled that will leave your mouth watering, topped with our sweet teriyaki sauce and sesame seeds!',
    content:'Contains: beef, sesame, soy',
  },
  {
    id: 3,
    title: "Combo (Chicken & Steak)",
    category: "Teriyaki",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: 'The best of both teriyakis: chicken and steak!',
    content: 'Contains: eggs, poultry, soy, sesame, wheat',
  },
  {
    id: 4,
    title: "Chicken Katsu",
    category: "Katsu",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: 'Tender white meat chicken, deep-fried and served with our tangy katsu sauce!',
    content: 'Contains: eggs, poultry, soy, sesame, wheat',
  },
  {
    id: 5,
    title: "Chicken Katsu & Chicken Teriyaki",
    category: "Katsu",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: 'Both our delicious chicken katsu and scrumptious chicken teriyaki!',
    content: 'Contains: eggs, poultry, soy, sesame, wheat',
  },
  {
    id: 6,
    title: "Chicken Katsu & Steak Teriyaki",
    category: "Katsu",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: 'The perfect combination of crispy chicken and tender steak!',
    content: 'Contains: beef, eggs, poultry, soy, sesame, wheat',
  },
  {
    id: 7,
    title: "Sweet Hawaiian Fried Chicken",
    category: "Katsu",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: 'Boneless Fried Chicken fried and tossed with our sweet garlic sauce!',
    content: 'Contains: eggs, poultry, soy, sesame, wheat',
  },
  {
    id: 8,
    title: "Salmon Teriyaki",
    category: "Fish",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: 'A beautifully grilled salmon filet topped with our sweet teriyaki sauce and sesame seeds!',
    content: 'Contains: seafood, sesame, soy',
  },
  {
    id: 9,
    title: "Garlic Shrimp",
    category: "Fish",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: 'Delicious jumbo shrimp sautéed in their shells in butter and garlic and finished with a sprinkle of green onion!',
    content: 'Contains: Dairy, shellfish, sesame, soy',
  },
  {
    id: 10,
    title: "Fried Shrimp",
    category: "Fish",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: 'Our delicious Jumbo shrimp battered and fried until golden!',
    content: 'Contains: shellfish, sesame, wheat',
  },
  {
    id: 11,
    title: "Bacon Fried Rice",
    category: "Island",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: 'Savory bacon and rice stir-fried along with egg and green onion!',
    content: 'Contains: dairy, egg, pork, sesame, soy',
  },
  {
    id: 12,
    title: "Spam Fried Rice",
    category: "Island",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: 'Yummy Spam and rice stir-fried along with egg and green onion!',
    content: 'Contains: dairy, egg, pork, sesame, soy',
  },
  {
    id: 13,
    title: "Spam and Egg",
    category: "Island",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: 'Delicious sliced Spam scrambled with egg and green onion and served on top of rice!',
    content: 'Contains: dairy, egg, pork, sesame, soy',
  },
  {
    id: 14,
    title: "BBQ Short Rib Bowl(Kalbi)",
    category: "Island",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: 'Tender, marinated beef short ribs grilled to mouth-watering perfection!',
    content: 'Contains: beef, sesame, soy',
  },
  {
    id: 15,
    title: "Tuna Poke",
    category: "Poke",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: 'Bluefin ahi tuna mixed with avocado, green onion, togarashi, shoyu, and sesame oil, topped with seaweed salad and white ginger!',
    content: 'Contains: seafood, sesame, soy',
  },
  {
    id: 16,
    title: "Salmon Poke",
    category: "Poke",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: 'Delicious salmon mixed with avocado, green onion, togarashi, shoyu, and sesame oil, topped with seaweed salad and white ginger!',
    content: 'Contains: seafood, sesame, soy',
  },
  {
    id: 17,
    title: "Rainbow Poke",
    category: "Poke",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: 'Both Tuna and Salmon mixed with avocado, green onion, togarashi, shoyu, and sesame oil, topped with seaweed salad and white ginger!',
    content: 'Contains: seafood, sesame, soy',
  },
  {
    id: 18,
    title: "Wonton Soup",
    category: "Soup",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: 'Savory pork wonton with egg and served with a side of rice!',
    content: 'Contains: egg, pork',
  },
  {
    id: 19,
    title: "Seafood Soup",
    category: "Soup",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: 'Flavorful shrimp and salmon soup served with a side of rice!',
    content: 'Contains: seafood, shellfish',
  },
  {
    id: 20,
    title: "Chicken Katsu Ramen",
    category: "Soup",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: 'Crispy chicken katsu with tender ramen noodles in beef broth!',
    content: 'Contains: beef, poultry, sesame, soy, wheat',
  },
  {
    id: 21,
    title: "Seafood Ramen",
    category: "Soup",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: 'Flavorful shrimp and salmon served with tender ramen noodles!',
    content: 'Contains: seafood, sesame, shellfish, soy',
  }, 
  {
    id: 22,
    title: "Kalbi Ramen",
    category: "Soup",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: 'Delicious marinated beef short rib served with tender ramen noodles!',
    content: 'Contains: beef, sesame, soy',
  }, 
  {
    id: 23,
    title: "Chinese Chicken Salad",
    category: "Salad",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: 'Romaine lettuce, hand-shredded white meat chicken, and wonton chips with our delicious sesame dressing!',
    content: 'Contains: poultry, sesame, soy',
  }, 
  {
    id: 24,
    title: "Half-Tray Chinese Chicken Salad",
    category: "Salad",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: 'Feeds 12-14 people',
    content: 'Contains: poultry, sesame, soy',
  },
  {
    id: 25,
    title: "Full-Tray &nbsp&nbsp&nbsp Chinese Chicken Salad",
    category: "Salad",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: 'Feeds 23-25 people',
    content: 'Contains: poultry, sesame, soy',
  },
  {
    id: 26,
    title: "Spam Musubi &nbsp (2-piece)",
    category: "Sides",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: 'A Hawaiian classic: sliced Spam wrapped in rice and dried seaweed!',
    content: 'Contains: pork, sesame',
  },
  {
    id: 27,
    title: "Gyoza (6 piece)",
    category: "Sides",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: 'Pork-filled and fried until crispy and served with our gyoza sauce!',
    content: 'Contains: pork, sesame, soy',
  },
  {
    id: 28,
    title: "Mac Salad",
    category: "Sides",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: '2 heaping scoops of our delicious potato macaroni salad!',
    content: 'Contains: egg',
  },
  {
    id: 29,
    title: "Mac Salad",
    category: "Sides",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: '2 heaping scoops of our delicious potato macaroni salad!',
    content: 'Contains: egg',
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

            <p class="item-content">
              ${item.content}
            </p>
          </div>
          <div class="quanitiyInfo">
            <select name="quantity" id="${item.id}quantity">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button id="${item.id}addBtn">Add to Cart</button>
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



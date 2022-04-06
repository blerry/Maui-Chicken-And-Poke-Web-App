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

  var cart = [];



  //cart.push(menu[29]);
  //button clicked. Find the button 
  const menuItem = document.getElementById("").addEventListener("click", function() {
    let item = {
        itemID: 0,
        title: "",
        quantity: 0
    }

    if(menu[menuItem].id == '1'){
    item.itemID = 1;
    item.quantity = document.getElementById("").value; 
    cart.push(item);
    }
  });

  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
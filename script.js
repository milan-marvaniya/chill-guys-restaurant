/************ CONFIG ************/
const phone = "8160942547";
const FREE_DELIVERY_MIN = 300;
const DISCOUNT_MIN = 500;
const DISCOUNT_PERCENT = 10;

// Restaurant timing (8 PM – 11 PM)
const OPEN_HOUR = 12;
const CLOSE_HOUR = 23;

// Google Sheet API (AS IT IS – future use)
const SHEET_API = "https://script.google.com/macros/s/AKfycbw9TSSn1x_hG1gNIyJsybsf5AJIH97PlCPRZSUR3CLphUq09eglsLbJU7twvKLMNuSV/exec";

/************ MENU DATA (100% FULL – NOTHING REMOVED) ************/
const menu = {
  combos: [
    { name: "3 Burger + French Fries + 3 Cola + Cheese Dip", price: 300 },
    { name: "Club Sandwich + French Fries + 2 Cola", price: 240 },
    { name: "FAMILY MEAL [Pizza + Dabeli + SingSlice Vadapav + 2 Cola]", price: 235 },
    { name: "Veg Frankie + Italian Pizza + 2 Cola", price: 220 },
    { name: "2 Burger + French Fries + 2 Cola", price: 210 },
    { name: "Pizza + French Fries + Cola + Cheese Dip", price: 210 },
    { name: "Pizza + Chilly Toast + Cola", price: 205 },
    { name: "Pizza + Garlic Bread + Cola", price: 200 },
    { name: "Pizza + Burger + Cola", price: 200 },
    { name: "Burger + Chilly Toast + Cola", price: 180 },
    { name: "3 Dabeli + French Fries + 3 Cola + cheese Dip", price: 160 },
    { name: "veg Frankie + French Fries + Cola + Cheese Dip", price: 150 },
    { name: "Burger + French Fries + Cola + Cheese Dip", price: 150 },
    { name: "Gaelic Bread + French Fries + Cola + Cheese Dip", price: 140 },
    { name: "Grilled Sandwich + French Fries + Cola + cheese Dip", price: 130 },
    { name: "2 Dabeli + French Fries + 2 Cola + Cheese Dip", price: 125 },
    { name: "Vadapav + French Fries + Cola + Cheese Dip", price: 100 },
    { name: "Puff + French Fries + Cola", price: 100 },
    { name: "Dabeli + French Fries + Cola", price: 100 },
    { name: "Burger + French Fries + Cola", price: 130 }
  ],
   coldCoffeeAndCoco: [
    { name: "Cold Coco", price: 100 },
    { name: "Cold Coco with Ice Cream", price: 130 },
    { name: "Cold Coffee", price: 110 },
    { name: "Cold Coffee with Ice Cream", price: 140 },
    { name: "Chocolate Coffee", price: 120 },
    { name: "Chocolate Coffee with Ice Cream", price: 140 }
  ],

  classicShakes: [
    { name: "Strawberry Shake", price: 120 },
    { name: "Pineapple Shake", price: 120 },
    { name: "Oreo Shake", price: 120 },
    { name: "Butterscotch Shake", price: 120 },
    { name: "Rose Shake", price: 120 }
  ],

  specialShakes: [
    { name: "Black Currant Shake", price: 130 },
    { name: "Caramel Shake", price: 130 },
    { name: "Pan Shake", price: 130 }
  ],

  chocolateLovers: [
    { name: "KitKat Shake", price: 140 },
    { name: "Nutella Shake", price: 150 },
    { name: "Biscoff Shake", price: 180 },
    { name: "Chocolate Brownie Shake", price: 150 }
  ],
  vadapav: [
    { name: "Oil Vadapav", price: 30 },
    { name: "Butter Vadapav", price: 50 },
    { name: "Cheese Vadapav", price: 70 },
    { name: "American Vadapav", price: 70 },
    { name: "Schezwan Vadapav", price: 70 },
    { name: "Paneer Vadapav", price: 80 }
  ],

  dabeli: [
    { name: "Regular Dabeli", price: 30 },
    { name: "Butter Dabeli", price: 50 },
    { name: "Cheese Dabeli", price: 70 },
    { name: "American Dabeli", price: 70 },
    { name: "Schezwan Dabeli", price: 70 },
    { name: "Paneer Dabeli", price: 80 }
  ],

  maggi: [
    { name: "Masala Maggi", price: 70 },
    { name: "Veg Maggi", price: 80 },
    { name: "Delicious Butter Maggi", price: 100 },
    { name: "Schezwan Maggi Spicy", price: 100 },
    { name: "Cheese Delicious Maggi", price: 130 },
    { name: "Veg Cheese Maggi", price: 140 }
  ],

  puff: [
    { name: "Regular Puff", price: 30 },
    { name: "Delicious Butter Puff", price: 50 },
    { name: "Mexican Puff", price: 50 },
    { name: "Spicy Schezwan Puff", price: 50 },
    { name: "Tandoori Paneer Puff", price: 60 },
    { name: "Cheese Puff", price: 70 },
    { name: "Tanduri Paneer Puff", price: 80 },
    { name: "Mexican Cheese Puff", price: 80 },
    { name: "Spicy Schezwan Cheese Puff", price: 80 }
  ],

  grilled: [
    { name: "Veg Grill Sandwich", price: 80 },
    { name: "Aloo Mutter Grill Sandwich", price: 80 },
    { name: "veg Aloo Mutter Grill Sandwich", price: 90 },
    { name: "Aloo Mutter Cheese Grill Sandwich", price: 120 },
    { name: "Veg Cheese Grill Sandwich", price: 120 },
    { name: "Cheese Grill Sandwich", price: 140 },
    { name: "Cheese Chutney Grill Sandwich", price: 150 }
  ],

  club: [
    { name: "Classic Veg Club", price: 160 },
    { name: "American Club", price: 170 },
    { name: "Mexican Club", price: 170 },
    { name: "Spicy Schezwan Club", price: 170 },
    { name: "Ghughra Sandwich", price: 170 },
    { name: "Italian Club", price: 170 },
    { name: "Cheese Maggi Sandwich", price: 180 },
    { name: "Tandoori Club", price: 180 },
    { name: "Cheese Blast Sandwich", price: 230 }
  ],

  frankie: [
    { name: "Veg Frankie", price: 90 },
    { name: "Mexican Frankie", price: 100 },
    { name: "Veg Cheese Frankie", price: 120 },
    { name: "Paneer Frankie", price: 120 },
    { name: "Makhani Frankie", price: 130 },
    { name: "Schezwan Cheese Frankie", price: 130 },
    { name: "Mexicqan Cheese Frankie", price: 130 },
    { name: "Tandoori Paneer Cheese Frankie", price: 150 },
    { name: "Cheese Chilli Frankie", price: 160 },
    { name: "Makhani Cheese Frankie", price: 160 }
  ],

  burger: [
    { name: "Veg Tikki Burger", price: 80 },
    { name: "Paneer Burger", price: 100 },
    { name: "Cheese Burger", price: 100 },
    { name: "Paneer Cheese Burger", price: 120 }
  ],

  garlic: [
    { name: "Cheese Garlic Bread", price: 90 },
    { name: "Onion Garlic Bread", price: 100 },
    { name: "Supreme Garlic Bread", price: 110 }
  ],

  toast: [
    { name: "Cheese Chilly Toast", price: 100 },
    { name: "Mexican Chilly Toast", price: 120 },
    { name: "Schezwan Spicy Chilly Toast", price: 130 },
    { name: "Tandoori Paneer Toast", price: 140 },
    { name: "Regular CTC", price: 140 }
  ],

  sandwich: [
    { name: "Veg Sandwich", price: 50 },
    { name: "Aloo Mutter Sandwich", price: 50 },
    { name: "Bread Butter Sandwich", price: 50 },
    { name: "Butter Jam Sandwich", price: 60 },
    { name: "Butter Chutney Sandwich", price: 50 },
    { name: "Mix Aloo Veg Sandwich", price: 70 },
    { name: "Veg Cheese Sandwich", price: 80 },
    { name: "Mayonnaise Sandwich", price: 80 },
    { name: "Chocolate Sandwich", price: 90 },
    { name: "Cheese Sandwich", price: 90 },
    { name: "Cheese Jam Sandwich", price: 90 },
    { name: "Cheese Chutney Sandwich", price: 100 },
    { name: "Cheese Mayo Sandwich", price: 100 },
    { name: "Cheese Chocolate Sandwich", price: 120 }
  ],

  fries: [
    { name: "French Fries", price: 80 },
    { name: "Peri Peri Masala", price: 110 },
    { name: "Cheese French Fries", price: 120 }
  ],

  pizza: [
    { name: "Italian Pizza", price: 120 },
    { name: "Margherita Pizza", price: 130 },
    { name: "Double Cheese Pizza", price: 140 },
    { name: "American Corn Pizza", price: 140 },
    { name: "Tandoori Paneer Pizza", price: 150 },
    { name: "Premium Pizza", price: 160 }
  ]
};

/************ STATE ************/
let cart = {};
let currentCategory = "combos";

/************ DOM ************/
const menuList = document.getElementById("menuList");
const totalSpan = document.getElementById("total");
const cartTotal = document.getElementById("cartTotal");
const checkoutPanel = document.getElementById("checkoutPanel");
const cartItemsDiv = document.getElementById("cartItems");

/************ HELPERS ************/
function makeId(n) {
  return n.replace(/[^a-zA-Z0-9]/g, "_");
}

function isRestaurantOpen() {
  const h = new Date().getHours();
  return h >= OPEN_HOUR && h < CLOSE_HOUR;
}

/************ MENU RENDER ************/
function loadCategory(cat, btn) {
  currentCategory = cat;
  menuList.innerHTML = "";

  document.querySelectorAll(".category-bar button")
    .forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");

  menu[cat].forEach(it => {
    const id = makeId(it.name);
    if (!cart[id]) cart[id] = 0;

    menuList.innerHTML += `
      <div class="menu-item">
        <div class="item-text">${it.name}</div>
        <div class="item-price">₹${it.price}</div>
        <div class="qty">
          <button onclick="changeQty('${id}',-1)">−</button>
          <span>${cart[id]}</span>
          <button onclick="changeQty('${id}',1)">+</button>
        </div>
      </div>`;
  });
}

/************ CART ************/
function changeQty(id, val) {
  cart[id] = Math.max(0, (cart[id] || 0) + val);
  loadCategory(currentCategory, document.querySelector(".category-bar .active"));
  updateTotals();
}

function updateTotals() {
  let base = 0;

  for (let id in cart) {
    if (cart[id] > 0) {
      for (let c in menu) {
        menu[c].forEach(it => {
          if (makeId(it.name) === id) {
            base += cart[id] * it.price;
          }
        });
      }
    }
  }

  // DELIVERY
  let delivery = 0;
  if (base > 0 && base < FREE_DELIVERY_MIN) {
    delivery = 40;
  }

  // DISCOUNT
  let discount = 0;
  if (base >= DISCOUNT_MIN) {
    discount = Math.round(base * DISCOUNT_PERCENT / 100);
  }

  const final = base + delivery - discount;

  /* ---------- TOTALS ---------- */
  totalSpan.innerText = final;
  cartTotal.innerText = final;
  document.getElementById("checkoutTotal").innerText = final;
  document.getElementById("basePrice").innerText = base;
  document.getElementById("finalAmount").innerText = final;

  /* ---------- DELIVERY UI ---------- */
  const deliveryEl = document.getElementById("deliveryFee");
  if (base === 0) {
    deliveryEl.innerText = "—";
  } else if (delivery === 0) {
    deliveryEl.innerHTML = `<span class="cross">₹40</span> FREE`;
  } else {
    deliveryEl.innerText = "₹40";
  }

  /* ---------- DISCOUNT UI ---------- */
  const discountRow = document.querySelector(".discount-row");
  if (discount > 0) {
    discountRow.classList.remove("hidden");
    document.getElementById("discountAmount").innerText = discount;
  } else {
    discountRow.classList.add("hidden");
  }

  /* ---------- LIVE CART MESSAGE (NO HTML CHANGE) ---------- */
  const msgDiv = document.getElementById("cartMessage");

  let msg = "";
  if (base >= DISCOUNT_MIN) {
    msg = "🎉 10% OFF Applied";
  }
  else if (base >= FREE_DELIVERY_MIN) {
    msg = "🚚 FREE Delivery";
  }

  if (msg) {
    msgDiv.innerText = msg;
    msgDiv.style.display = "block";
    msgDiv.classList.add("animate");
  } else {
    msgDiv.style.display = "none";
    msgDiv.classList.remove("animate");
  }
}


/************ CHECKOUT ************/
function toggleCheckout() {
  if (!isRestaurantOpen()) {
    alert("⏰ Restaurant Closed (8 PM – 11 PM)");
    return;
  }
  checkoutPanel.classList.toggle("hidden");
}

/************ INIT ************/
loadCategory("combos", document.querySelector(".category-bar button"));
updateTotals();

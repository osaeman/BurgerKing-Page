// NAVBAR

// Creating  Elements And Applying Classes
const nav_section_container = document.createElement("div");
nav_section_container.classList.add("nav-section-container");

const navbar_flexbox = document.createElement("div");
navbar_flexbox.classList.add("navbar-flexbox");

const navbar_flexbox_item1 = document.createElement("div");
navbar_flexbox_item1.classList.add("navbar-flexbox-item1");

const navbar_flexbox_item2 = document.createElement("div");
navbar_flexbox_item2.classList.add("navbar-flexbox-item2");

const burgerking_logo = document.createElement("div");
burgerking_logo.classList.add("burgerking-logo");

// Fetching Elements and Applying Classes
const nav_section = document.getElementById("nav-section");
nav_section.classList.add("nav-section");

// template Literals
navbar_flexbox_item2.innerHTML = `
<i class="fas fa-shopping-bag"></i>
<p>&#163 0.00</p>
`;

navbar_flexbox_item1.innerHTML = `
 <ul>
 <li>
   <a href="#"><i class="fal fa-bars"></i></a>
 </li>
 <li>
   <a href="#">Menu</a>
   </li>
 <li>
   <a href="#">Resturants</a>
   </li>
 <li>
   <a href="#">Trending</a>
   </li>
 <li>
   <a href="#">More</a>
    </li>
 </ul>
 `;
// Appending Elements
navbar_flexbox.appendChild(navbar_flexbox_item1);
navbar_flexbox.appendChild(navbar_flexbox_item2);

nav_section_container.appendChild(navbar_flexbox);
nav_section_container.appendChild(burgerking_logo);

nav_section.appendChild(nav_section_container);

// Mobile navbar
// Creating  Elements And Applying Classes
const navbar_mob_flexbox = document.createElement("div");
navbar_mob_flexbox.classList.add("navbar-mob-flexbox");

// Fetching Elements and Applying Classes
const nav_mob_section = document.getElementById("nav-mob-section");
nav_mob_section.classList.add("nav-mob-section");

// template Literals
navbar_mob_flexbox.innerHTML = `
<div>
<a href="#">
  <i class="fas fa-sandwich"></i>
  <small>Home</small>
</a>
</div>
    
<div>
<a href="#">
  <i class="fas fa-cheeseburger"></i>
<small>Order</small>
</a>
</div>

<div>
<a href="#">
  <i class="fas fa-redo"></i>
  <small>Reorder</small>
</a>
</div>

<div>
<a href="#">
  <i class="fas fa-ellipsis-h"></i>
 <small>More</small>
</a>
</div>
`;

// Appending Elements
nav_mob_section.appendChild(navbar_mob_flexbox);

// Hero Section

// Creating  Elements And Applying Classes
const hero_section_img = document.createElement("div");
hero_section_img.classList.add("hero-section-img");

const find_btn = document.createElement("div");
find_btn.classList.add("find-btn");

// Fetching Elements and Applying Classes
const hero_section = document.getElementById("hero-section");
hero_section.classList.add("hero-section");

// template Literals
find_btn.innerHTML = `
<a href="#" > Find out more</a>
`;

// Appending Elements
hero_section.appendChild(hero_section_img);
hero_section.appendChild(find_btn);

// Offers section
// Creating  Elements And Applying Classes
const offer_section = document.createElement("div");
offer_section.classList.add("offer-section");

const anchor_tag_1 = document.createElement("a");
const anchor_tag_2 = document.createElement("a");
const anchor_tag_3 = document.createElement("a");
const anchor_tag_4 = document.createElement("a");

const offer_item_1 = document.createElement("div");
offer_item_1.classList.add("offer-item-1");

const offer_item_2 = document.createElement("div");
offer_item_2.classList.add("offer-item-2");

const offer_item_3 = document.createElement("div");
offer_item_3.classList.add("offer-item-3");

const offer_item_4 = document.createElement("div");
offer_item_4.classList.add("offer-item-4");

// Fetching Elements and Applying Classes
const offer_section_container = document.getElementById(
  "offer-section-container"
);
offer_section_container.classList.add("offer-section-container");

// template Literals
offer_item_1.innerHTML = `
<div class="offer-btn-1 btn"> 
Find out more
</div>
`;

offer_item_3.innerHTML = `
<div class="offer-btn-2 btn"> 
See Offers
</div>
<div class="offer-item-3-content">
                <h1>GREAT OFFERS</h1>
                <p>Flame Grilled Vouchers</p>
            </div>
`;

offer_item_4.innerHTML = `
<div class="offer-btn-3 btn"> 
Find out more
</div>
`;

// Appending Elements
anchor_tag_1.appendChild(offer_item_1);
anchor_tag_2.appendChild(offer_item_2);
anchor_tag_3.appendChild(offer_item_3);
anchor_tag_4.appendChild(offer_item_4);

offer_section.appendChild(anchor_tag_1);
offer_section.appendChild(anchor_tag_2);
offer_section.appendChild(anchor_tag_3);
offer_section.appendChild(anchor_tag_4);

offer_section_container.appendChild(offer_section);

// App section

// Creating  Elements And Applying Classes

const app_section = document.createElement("div");
app_section.classList.add("app-section");

const app_section_flexbox = document.createElement("div");
app_section_flexbox.classList.add("app-section-flexbox");

const mobile_img_container = document.createElement("div");
mobile_img_container.classList.add("mobile-img-container");

const mobile_img = document.createElement("div");
mobile_img.classList.add("mobile-img");

const app_flexbox_content = document.createElement("div");
app_flexbox_content.classList.add("app-flexbox-content");

// Fetching Elements and Applying Classes
const app_section_container = document.getElementById("app-section-container");
app_section_container.classList.add("app-section-container");

// template Literals
app_flexbox_content.innerHTML = `
<h1>
Save £££
With offers on demand
</h1>

<div class="app-section-btn">
<a href="#">
<div>
<i class="fab  fa-apple"></i>
<p >
  Download on the
 <br>
 <span>App Store</span>
</p> 
</div>
</a>

<a href="#">
<div>
<i class="fab  fa-google-play"></i>
<p>
  GET IT ON
  <br>
  <span>Google Play</span>   
</p>

</div>
</a>
</div>
<small >
Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. 
App Store is a service mark of Apple Inc. Google Play is a trademark of Google Inc. Terms apply.
</small>
`;

// Appending Elements
mobile_img_container.appendChild(mobile_img);

app_section_flexbox.appendChild(mobile_img_container);
app_section_flexbox.appendChild(app_flexbox_content);

app_section.appendChild(app_section_flexbox);

app_section_container.appendChild(app_section);

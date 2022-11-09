const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

let AllButton = document.querySelectorAll(".btn-item")
let showMenuDOM = document.querySelector(".menus")
let tempMenu = [];

AllButton.forEach(function (item) {
  item.addEventListener("click", function () {
    selected(item.innerHTML)
  })
  // console.log(item)
})

function selected(name="All") {
  if (name == "All") {
    tempMenu = menu.filter(item => item.category != "");
    showMenu(tempMenu)
    // console.log(tempMenu)
  }
  else {
    tempMenu = menu.filter(item => item.category == name);
    showMenu(tempMenu)
    // console.log(tempMenu)
  }
}

function showMenu(menuArray) {
  showMenuDOM.innerHTML = ""
  for (let k = 0; k < menuArray.length; k = k + 2) {
    console.log(k)
    if (menuArray.length % 2 == 0) {
      showMenuDOM.innerHTML = showMenuDOM.innerHTML + `
  
<div class="row menu">
  <div class="col-6">
    <div class="row">
      <div class="col-4">
        <img class="photo"
          src="${menuArray[k].img}">
      </div>
      <div class="col-8 ">
        <div class="row menu-title">
          <div class="col-10" style="padding-left:0px">
            <h4> ${menuArray[k].title}
          </div>
          <div class="col-2">
            <h4> ${menuArray[k].price}
          </div>
        </div>
        <div class="row">
          <div class="menu-text">
          ${menuArray[k].desc}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-6">
    <div class="row">
      <div class="col-4">
        <img class="photo"
          src="${menuArray[k + 1].img}">
      </div>
      <div class="col-8 ">
        <div class="row menu-title">
          <div class="col-10" style="padding-left:0px">
            <h4> ${menuArray[k + 1].title}
          </div>
          <div class="col-2">
            <h4> ${menuArray[k + 1].price}
          </div>
        </div>
        <div class="row">
          <div class="menu-text">
          ${menuArray[k + 1].desc}
          </div>
        </div>
      </div>
    </div>
  </div> 
</div>
`
    }
    else {
      if (k + 2 > menuArray.length) {
        showMenuDOM.innerHTML = showMenuDOM.innerHTML + `
   <div class="row menu">
  <div class="col-6">
  <div class="row">
    <div class="col-4">
      <img class="photo"
        src="${menuArray[k].img}">
    </div>
    <div class="col-8 ">
      <div class="row menu-title">
        <div class="col-10" style="padding-left:0px">
          <h4> ${menuArray[k].title}
        </div>
        <div class="col-2">
          <h4> ${menuArray[k].price}
        </div>
      </div>
      <div class="row">
        <div class="menu-text">
        ${menuArray[k].desc}
        </div>
      </div>
    </div>
  </div>
</div>

</div>`
      }
      else {
        showMenuDOM.innerHTML = showMenuDOM.innerHTML + `
    <div class="row menu">
  <div class="col-6">
  <div class="row">
    <div class="col-4">
      <img class="photo"
        src="${menuArray[k].img}">
    </div>
    <div class="col-8 ">
      <div class="row menu-title">
        <div class="col-10" style="padding-left:0px">
          <h4> ${menuArray[k].title}
        </div>
        <div class="col-2">
          <h4> ${menuArray[k].price}
        </div>
      </div>
      <div class="row">
        <div class="menu-text">
        ${menuArray[k].desc}
        </div>
      </div>
    </div>
  </div>
</div>
<div class="col-6">
  <div class="row">
    <div class="col-4">
      <img class="photo"
        src="${menuArray[k + 1].img}">
    </div>
    <div class="col-8 ">
      <div class="row menu-title">
        <div class="col-10" style="padding-left:0px">
          <h4> ${menuArray[k + 1].title}
        </div>
        <div class="col-2">
          <h4> ${menuArray[k + 1].price}
        </div>
      </div>
      <div class="row">
        <div class="menu-text">
        ${menuArray[k + 1].desc}
        </div>
      </div>
    </div>
  </div>
</div> 
</div> `
      }
    }
  };

}

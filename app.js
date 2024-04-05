
let  menu = []
let starters = []
let mains = []
let desserts = []
let beverages = []
//Function to fetch the dishes from menu.json
async function getMenu() {
  let a = await fetch("http://127.0.0.1:3000/menu.json")
  let response = await a.json()
  return Array.from(response.menu)
}

//Categrise the dishes
function categorize() {

  for (let index = 0; index < menu.length; index++) {
    let item = menu[index]
    if (item.category == "mains") {
      mains.push(item)
    }
    else if (item.category == "starters") {
      starters.push(item)
    }
    else if (item.category == "desserts") {
      desserts.push(item)
    }
    else if (item.category == "beverages") {
      beverages.push(item)
    }
  
  }
}

//create the menuCard for the dishes
function menuCard(items) {
  let menuitems = document.querySelector(".menuitems")
  menuitems.innerHTML = " "
  if(items.length == 0) {
    let message = `<div class="message"><h2>Nothing Found</h2></div>`
    menuitems.innerHTML = message 
  }

  for (let index = 0; index < items.length; index++) {
    let item = items[index]


    let html = `
   <div class="card">
     <img src="${item.img}" class="card-img-top" alt="${item.title}">
     <div class="card-body">
       <h5 class="card-title">${item.title}</h5>
       <h6 class="card-subtitle mb-2 text-muted">${item.price}</h6>
       <p class="card-text card-description">${item.description}</p>
       <p class="card-text"><small class="text-muted">Category: ${item.category}</small></p>
     </div>
   </div>
  `
    menuitems.innerHTML = document.querySelector(".menuitems").innerHTML + html
  }

}

//Main function
async function main() {
  menu = await getMenu()
  menuCard(menu);
  categorize();

  //Add eventlistener to navButtons
  document.querySelectorAll(".nav-link").forEach(navLink => {
    navLink.addEventListener("click", () => {
      let filter = navLink.dataset.filter || "menu";
      switch (filter) {
        case "starters":
          menuCard(starters);
          break;
        case "mains":
          menuCard(mains);
          break;
        case "desserts":
          menuCard(desserts);
          break;
        case "beverages":
          menuCard(beverages);
          break;
        default:
          menuCard(menu);
      }
    });
  });

  let search = document.querySelector("#search-input")
  search.addEventListener('input', () => {
    let a = []
    menu.forEach(element => {
      if (element.title.toLowerCase().includes(search.value.toLowerCase())) {
        a.push(element);
      }
    });
    menuCard(a)
  })


  //Eventlistener to navbar toggler for mobile devices
  document.querySelector(".navbar-toggler").addEventListener("click", () => {
    let nav = document.querySelector(".search-link")
    let links = document.querySelector(".links")
    if (nav.style.display == "flex") {
      nav.style.display = "none"
    }
    else {
      nav.style.display = "flex"
      nav.style.flexDirection = "column"
      nav.style.alignItems = "flex-start"
    }
  })
}

main()




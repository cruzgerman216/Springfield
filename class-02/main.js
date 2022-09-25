let menuItems = [
  { name: "Pepperoni Pizza" },
  { name: "Supreme" },
  { name: "cheese" },
];

let menuList = document.getElementById("menu-list");

for(let i = 0; i < menuItems.length; i++){
  let itemElem = document.createElement('li');
  itemElem.innerText = menuItems[i].name;
  if(menuItems[i].name === 'Supreme'){
    itemElem.style.color = 'green'
  }else if(menuItems[i].name === 'cheese'){
    itemElem.style.fontSize = '50px'
  }
  menuList.appendChild(itemElem)
}

document.body.style.backgroundColor = 'purple'
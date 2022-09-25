// Variables
let fishList = [
  {
    name: "Large mouth Bass",
    location: "Table rock",
    size: "large",
  },
  {
    name: "trout",
    location: "Bennett Springs",
    size: "medium",
  },
  {
    name: "catfish",
    location: "Lake of the Ozarks",
    size: "large",
  },
];

function addFishToPage(fish){
  let fishContainerElem = document.getElementById("fish-container");

  // Create element
  let fishElement = document.createElement("div");
  fishElement.innerHTML = `
  <h3>${fish.name}</h3>
  <p>Location ${fish.location}</p>
  <p>Size: ${fish.size}</p>

`;
  // Append child onto
  fishContainerElem.appendChild(fishElement);
}

// Built in method called foreach

fishList.forEach((fish) => {
  addFishToPage(fish)
});


function test(){
  console.log("Test")
}
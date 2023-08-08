//
const pokemonList = [
  { name: "Charmandar", type: "fire" },
  { name: "Squirtle", type: "water" },
  { name: "Bulbasaur", type: "grass" },
  { name: "Cyndaquil", type: "fire" },
];

let playerPokemon = null;
let computerPokemon = null;

// Top Menu and Sub Menu code

const topMenu = document.querySelector("#top-menu");

topMenu.style.height = "100%";

topMenu.style.backgroundColor = "gray";

let showingSubMenu = false;

let menuLinks = [
  {
    text: "Fire-types",
    href: "#",
    subLinks: [{ text: "Charmandar" }, { text: "Cyndaquil" }],
  },
  { text: "Water-types", href: "#", subLinks: [{ text: "Squirtle" }] },
  { text: "Grass-types", href: "#", subLinks: [{ text: "Bulbasaur" }] },
];

menuLinks.forEach((el) => {
  const link = document.createElement("a");
  link.setAttribute("href", el.href);
  link.innerText = el.text;
  topMenu.appendChild(link);
});

const subMenu = document.querySelector("#sub-menu");

subMenu.style.height = "100%";

subMenu.style.backgroundColor = "Black";

subMenu.style.position = "absolute";

subMenu.style.top = "0";

let topMenuLinks = document.querySelectorAll("a");

topMenu.addEventListener("click", (el) => {
  el.preventDefault();

  let nextEl = menuLinks.filter((element) => {
    return element.text === el.target.textContent;
  });

  for (let i = 0; i < topMenuLinks.length; i++) {
    topMenuLinks[i].classList.remove("active");
  }

  if (el.target.tagName === "A") {
    el.target.classList.add("active");

    showingSubMenu = false;
    subMenu.style.top = "0";
  }

  if (nextEl[0].subLinks) {
    showingSubMenu = true;
  }

  if (showingSubMenu === true) {
    let subLink = menuLinks.filter((element) => {
      return element.text === el.target.textContent;
    })[0].subLinks;

    makeSubMenu(subLink);
    subMenu.style.top = "100%";
  } else {
    showingSubMenu = false;
    subMenu.style.top = "0";
  }
});

function makeSubMenu(sublinks) {
  subMenu.innerHTML = "";

  for (let i = 0; i < sublinks.length; i++) {
    let link = document.createElement("a");
    link.href = sublinks[i].href;
    link.textContent = sublinks[i].text;
    subMenu.appendChild(link);
  }
}

subMenu.addEventListener("click", (evt) => {
  evt.preventDefault();

  console.log(evt.target.textContent);

  for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].name === evt.target.textContent) {
      playerPokemon = pokemonList[i];
    }
  }
  computerPokemon = pokemonList[Math.floor(Math.random() * pokemonList.length)];

  console.log(playerPokemon);
  console.log(computerPokemon);

  battle();
  // for (let i = 0; i < topMenuLinks.length; i++) {
  //   topMenuLinks[i].classList.remove("active");
  // }

  // if (evt.target.tagName === "A") {
  //   evt.target.classList.add("active");
  // }

  showingSubMenu = false;
  subMenu.style.top = "0";
});

// Code for RPS

let wins = 0;
let losses = 0;
let draws = 0;

function battle() {
  if (computerPokemon.type === playerPokemon.type) {
    alert("Its a tie");
    console.log(`It's a tie!`);
    draws++;
  } else if (
    (playerPokemon.type === "fire" && computerPokemon.type === "grass") ||
    (playerPokemon.type === "water" && computerPokemon.type === "fire") ||
    (playerPokemon.type === "grass" && computerPokemon.type === "water")
  ) {
    alert("Winner");
    console.log("Winner");
    wins++;
  } else {
    alert("You lose");
    console.log("You Lose");
    losses++;
  }
}

// console.log("Wins:", wins, "Losses:", losses, "Draws:", draws);

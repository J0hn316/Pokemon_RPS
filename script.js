let playerPokemon = null;
let computerPokemon = null;

const playerPokemonImg = document.querySelector(".PlayerPokemon");
const computerPokemonImg = document.querySelector(".ComputerPokemon");
const gameStart = document.querySelector(".container");
const play = document.getElementById("play");
const playAgain = document.getElementById("playagain");
const winsEl = document.getElementById("Wins");
const lossesEl = document.getElementById("Losses");
const drawsEl = document.getElementById("Draws");

const music = [
  { name: "SBM", src: "audio/GLB.mp3" },
  { name: "EBM", src: "audio/GLBV.mp3" },
  { name: "PS", src: "audio/pokeball_sound_effects_mp3cut_1.mp3" },
  { name: "lose", src: "audio/lose.wav" },
];

// Music came from KHInsider using website https://downloads.khinsider.com/game-soundtracks/album/pokemon-red-green-blue-yellow and https://mixkit.co/free-sound-effects/lose/

let song = new Audio();

const pokemonList = [
  { name: "Charizard", type: "fire", srcPath: "images/charizard.png" },
  { name: "Blastoise", type: "water", srcPath: "images/blastoise.png" },
  { name: "Venusaur", type: "grass", srcPath: "images/venusaur.png" },
  { name: "Typhlosion", type: "fire", srcPath: "images/typhlosion.png" },
  { name: "Feraligatr", type: "water", srcPath: "images/feraligatr.png" },
  { name: "Meganium", type: "grass", srcPath: "images/meganium.png" },
  { name: "Blaziken", type: "fire", srcPath: "images/blaziken.png" },
  { name: "Swampert", type: "water", srcPath: "images/swampert.png" },
  { name: "Sceptile", type: "grass", srcPath: "images/sceptile.png" },
];

// All images came from https://www.pngegg.com/ and Thanks to Arnaldo Pires

// Top Menu and Sub Menu code

const topMenu = document.querySelector("#top-menu");

topMenu.style.height = "100%";

topMenu.style.backgroundColor = "gray";

let showingSubMenu = false;

let menuLinks = [
  {
    text: "Fire-types",
    href: "#",
    subLinks: [
      { text: "Charizard" },
      { text: "Typhlosion" },
      { text: "Blaziken" },
    ],
  },
  {
    text: "Water-types",
    href: "#",
    subLinks: [
      { text: "Blastoise" },
      { text: "Feraligatr" },
      { text: "Swampert" },
    ],
  },
  {
    text: "Grass-types",
    href: "#",
    subLinks: [
      { text: "Venusaur" },
      { text: "Meganium" },
      { text: "Sceptile" },
    ],
  },
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

  for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].name === evt.target.textContent) {
      playerPokemon = pokemonList[i];
      playerPokemonImg.src = pokemonList[i].srcPath;
    }
  }

  // Code to that decides what pokemon CPU selects

  const pcSelectedPokemon = Math.floor(Math.random() * pokemonList.length);
  computerPokemon = pokemonList[pcSelectedPokemon];

  computerPokemonImg.src = pokemonList[pcSelectedPokemon].srcPath;

  playerPokemonImg.classList.remove("pokemonball1");
  computerPokemonImg.classList.remove("pokemonball");

  playSound("PS");

  gameStart.classList.add("start");

  setTimeout(() => {
    gameStart.classList.remove("start");
    // playMusic("EBM");
    battle();
  }, 2500);

  playAgain.style.visibility = "visible";

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
    playMusic("EBM");
    console.log("Winner");
    wins++;
  } else {
    alert("You lose");
    playMusic("lose");
    console.log("You Lose");
    losses++;
  }
  winsEl.textContent = "Wins:" + " " + wins;
  lossesEl.textContent = "Losses:" + " " + losses;
  drawsEl.textContent = "Draws:" + " " + draws;
}

play.addEventListener("click", () => {
  playMusic("SBM");
  playerPokemonImg.classList.add("pokemonball1");
  computerPokemonImg.classList.add("pokemonball");
  play.style.display = "none";
});

playAgain.addEventListener("click", () => {
  playAgain.style.visibility = "hidden";
  location.reload();
});

function playMusic(name) {
  if (name === "SBM") {
    song.src = music[0].src;
    song.volume = 0.3;
    song.play();
  } else if (name === "EBM") {
    song.src = music[1].src;
    song.volume = 0.3;
    song.play();
  } else if (name === "lose") {
    song.src = music[3].src;
    song.volume = 0.3;
    song.play();
  }
}

function playSound(name) {
  if (name === "PS") {
    let clip = new Audio("audio/pokeball_sound_effects_mp3cut_1.mp3");
    clip.volume = 0.2;
    clip.play();
  }
}

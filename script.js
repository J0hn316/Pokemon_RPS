const playerPokemonImg = document.querySelector('.PlayerPokemon');
const computerPokemonImg = document.querySelector('.ComputerPokemon');
const gameStart = document.querySelector('.container');
const play = document.getElementById('play');
const playAgain = document.getElementById('play-again');
const winsEl = document.getElementById('Wins');
const lossesEl = document.getElementById('Losses');
const drawsEl = document.getElementById('Draws');
const topMenu = document.querySelector('#top-menu');
const subMenu = document.querySelector('#sub-menu');

let topMenuLinks = document.querySelectorAll('a');
let playerPokemon = null;
let computerPokemon = null;
let song = new Audio();

let wins = 0;
let losses = 0;
let draws = 0;

const pokemonList = [
  { name: 'Charizard', type: 'fire', srcPath: 'images/charizard.png' },
  { name: 'Blastoise', type: 'water', srcPath: 'images/blastoise.png' },
  { name: 'Venusaur', type: 'grass', srcPath: 'images/venusaur.png' },
  { name: 'Typhlosion', type: 'fire', srcPath: 'images/typhlosion.png' },
  { name: 'Feraligatr', type: 'water', srcPath: 'images/feraligatr.png' },
  { name: 'Meganium', type: 'grass', srcPath: 'images/meganium.png' },
  { name: 'Blaziken', type: 'fire', srcPath: 'images/blaziken.png' },
  { name: 'Swampert', type: 'water', srcPath: 'images/swampert.png' },
  { name: 'Sceptile', type: 'grass', srcPath: 'images/sceptile.png' },
];

let showingSubMenu = false;

topMenu.style.height = '100%';
topMenu.style.backgroundColor = 'gray';

subMenu.style.height = '100%';
subMenu.style.backgroundColor = 'Black';
subMenu.style.position = 'absolute';
subMenu.style.top = '0';

const menuLinks = [
  {
    text: 'Fire-types',
    href: '#',
    subLinks: ['Charizard', 'Typhlosion', 'Blaziken'],
  },
  {
    text: 'Water-types',
    href: '#',
    subLinks: ['Blastoise', 'Feraligatr', 'Swampert'],
  },
  {
    text: 'Grass-types',
    href: '#',
    subLinks: ['Venusaur', 'Meganium', 'Sceptile'],
  },
];

menuLinks.forEach((el) => {
  const link = createLink(el.href, el.text);
  topMenu.appendChild(link);
});

function createLink(href, text) {
  const link = document.createElement('a');
  link.setAttribute('href', href);
  link.textContent = text;
  return link;
}

function updateSubMenu(subLinks) {
  subMenu.innerHTML = '';
  subLinks.forEach((subLink) => {
    const link = createLink('#', subLink);
    subMenu.appendChild(link);
  });
}

function playSound(name) {
  if (name === 'PS') {
    let clip = new Audio('audio/pokeball_sound_effects_mp3cut_1.mp3');
    clip.volume = 0.2;
    clip.play();
  }
}

function playMusic(name) {
  const music = [
    { name: 'SBM', src: 'audio/GLB.mp3' },
    { name: 'EBM', src: 'audio/GLBV.mp3' },
    { name: 'PS', src: 'audio/pokeball_sound_effects_mp3cut_1.mp3' },
    { name: 'lose', src: 'audio/lose.wav' },
  ];

  if (name === 'SBM') {
    song.src = music[0].src;
    song.volume = 0.3;
    song.play();
  } else if (name === 'EBM') {
    song.src = music[1].src;
    song.volume = 0.3;
    song.play();
  } else if (name === 'lose') {
    song.src = music[3].src;
    song.volume = 0.3;
    song.play();
  } else {
    song.pause();
  }
}

function battle() {
  let result = '';

  if (playerPokemon.type === computerPokemon.type) {
    result = "It's a tie";
    draws++;
  } else if (
    (playerPokemon.type === 'fire' && computerPokemon.type === 'grass') ||
    (playerPokemon.type === 'water' && computerPokemon.type === 'fire') ||
    (playerPokemon.type === 'grass' && computerPokemon.type === 'water')
  ) {
    result = 'Winner';
    wins++;
    playMusic('EBM');
  } else {
    result = 'You lose';
    losses++;
    playMusic('lose');
  }
  alert(result);
  updateScore();
}

function updateScore() {
  winsEl.textContent = `Wins: ${wins}`;
  lossesEl.textContent = `Losses: ${losses}`;
  drawsEl.textContent = `Draws: ${draws}`;
}

topMenu.addEventListener('click', (e) => {
  e.preventDefault();
  const target = e.target;

  if (target.tagName === 'A') {
    [...topMenu.querySelectorAll('a')].forEach((link) =>
      link.classList.remove('active')
    );

    const selectedMenu = menuLinks.find(
      (link) => link.text === target.textContent
    );
    if (selectedMenu?.subLinks) {
      showingSubMenu = true;
      updateSubMenu(selectedMenu.subLinks);
      subMenu.style.top = '100%';
    } else {
      showingSubMenu = false;
      subMenu.style.top = '0';
    }
  }
});

subMenu.addEventListener('click', (e) => {
  e.preventDefault();

  const selectedPokemon = pokemonList.find(
    (pokemon) => pokemon.name === e.target.textContent
  );

  if (selectedPokemon) {
    playerPokemon = selectedPokemon;
    playerPokemonImg.src = playerPokemon.srcPath;

    const randomIndex = Math.floor(Math.random() * pokemonList.length);
    computerPokemon = pokemonList[randomIndex];
    computerPokemonImg.src = computerPokemon.srcPath;

    playerPokemonImg.classList.remove('pokemon-ball1');
    computerPokemonImg.classList.remove('pokemon-ball');

    playSound('PS');
    gameStart.classList.add('start');

    setTimeout(() => {
      gameStart.classList.remove('start');
      battle();
    }, 2500);

    playAgain.style.visibility = 'visible';
    showingSubMenu = false;
    subMenu.style.top = '0';
  }
});

play.addEventListener('click', () => {
  playMusic('SBM');
  playerPokemonImg.classList.add('pokemon-ball1');
  computerPokemonImg.classList.add('pokemon-ball');
  play.style.display = 'none';
});

playAgain.addEventListener('click', () => {
  playAgain.style.visibility = 'hidden';
  location.reload();
});

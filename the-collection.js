const collection = [
  {
    name: "Inazuma eleven 2",
    devs: "Level5",
    editors: ["Level5", "Nintendo"],
    genre: ["RPG", "Football"],
    support: "Nintendo DS",
    image: "/the-collection/Assets/IE2.jpeg",
    sound: "/the-collection/Assets/IE.mp3",
  },
  {
    name: "Yakuza 0",
    devs: "Ryu ga Gotoku Studio",
    editors: "Sega",
    genre: ["RPG", "Action-Aventure"],
    support: ["PS4", "PS3", "Xbox One", "PC"],
    image: "/the-collection/Assets/yakuza-zero.jpg",
    sound: "/the-collection/Assets/Dame da ne WW2.mp3",
  },
  {
    name: "Persona 4 The Golden",
    devs: "Atlus",
    editors: ["Sega", "Atlus"],
    genre: "JRPG",
    support: ["Playstation Vita", "PC", "Switch", "PS4", "PS5", "Xbox One"],
    image: "/the-collection/Assets/P4G.webp",
    sound:"/the-collection/Assets/P4.mp3",
  },
  {
    name: "TES5: Skyrim",
    devs: "Bethesda Game Studios",
    editors: "Bethesda Softworks",
    genre: "Action-RPG",
    support: [
      "Switch",
      "PS4",
      "PS5",
      "Xbox One",
      "Xbox Series",
      "PlayStation 3",
      "Xbox 360",
      "PC",
    ],
    image: "/the-collection/Assets/The_Elder_Scrolls_5_Skyrim_Logo.png",
    sound:"/the-collection/Assets/Bob.mp3",
  },
  {
    name: "CSGO",
    devs: ["Valve", "Hidden Path Entertainment"],
    editors: "Valve",
    genre: "FPS",
    support: ["PC", "PS3", "Xbox 360"],
    image: "/the-collection/Assets/CSGO.jpeg",
    sound:"/the-collection/Assets/Bomb.mp3",
  },
  {
    name: "Kingdom Hearts 2",
    devs: "Square Enix",
    editors: "Sony Computer Entertainment",
    genre: "Action-RPG",
    support: "PS2",
    image: "/the-collection/Assets/Kingdom_Hearts_II_(PS2).jpg",
    sound:"/the-collection/Assets/KH2.mp3",
  },
  {
    name: "Oddworld: l'oddyssée d'Abe",
    devs: "Oddworld Inhabitants",
    editors: ["Oddworld Inhabitants", "GT Interactive Software"],
    genre: "Plateformer",
    support: "PS1",
    image: "/the-collection/Assets/oddworld-odyssee-e17406.jpg",
    sound:"/the-collection/Assets/Oddworld.mp3",
  },
  {
    name: "Dragon Quest VIII",
    devs: ["Square Enix", "Level5"],
    editors: ["Nintendo", "Square Enix"],
    genre: "JRPG",
    support: ["PS2", "3DS"],
    image: "/the-collection/Assets/DQ8.jpeg",
    sound:"/the-collection/Assets/DQ8.mp3",
  },
  {
    name: "Final Fantasy IX",
    devs: "Square",
    editors: "Square",
    genre: "JRPG",
    support: "PS1",
    image: "/the-collection/Assets/FF9.jpg",
    sound:"/the-collection/Assets/FF9.mp3",
  },
  {
    name: "Tekken 3",
    devs: "Namco",
    editors: ["Namco", "Sony Interactive Entertainment Europe"],
    genre: "VS fighter",
    support: "PS1",
    image: "/the-collection/Assets/Tekken3.jpeg",
    sound:"/the-collection/Assets/Tekken.mp3",
  },
  {
    name: "Elden Ring",
    devs: "FromSoftware",
    editors: "Bandai Namco",
    genre: "Action-RPG",
    support: ["PS5","PS4","Xbox One","Xbox series","PC"],
    image: "/the-collection/Assets/Elden.jpg",
    sound:"/the-collection/Assets/Elden.mp3",
  },
];
let card = document.createElement('div');
card.setAttribute("class","card");
document.body.appendChild(card);
let i = 0;
collection.forEach((element) => {
  let div = document.createElement("div");
  div.style.backgroundColor = "white";
  div.setAttribute("class", "game");
  div.setAttribute("id","game"+i);
  document.body.appendChild(div);
  const button = document.createElement("input");
  button.setAttribute("type","button");
  button.setAttribute("value","X");
  button.setAttribute("id","deleteBtn");
  div.appendChild(button);
  button.addEventListener("click", () => {
    div.remove()});
  let img = document.createElement("img");
  img.setAttribute("src", collection[i].image);
  div.appendChild(img);
  let span = document.createElement("span");
  let newGenre = document.createTextNode(collection[i].genre);
  span.style.color = "white";
  span.style.borderRadius = "20px";
  span.appendChild(newGenre);
  div.appendChild(span);
  let h2 = document.createElement("h2");
  div.appendChild(h2);
  let newName = document.createTextNode(collection[i].name);
  h2.appendChild(newName);
  let ul = document.createElement("ul");
  div.appendChild(ul);
  let li1 = document.createElement("li");
  let li2 = document.createElement("li");
  let li3 = document.createElement("li");
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  let newDevs = document.createTextNode("Development: " + collection[i].devs);
  let newEditors = document.createTextNode("Edited by: " + collection[i].editors);
  let newSupport = document.createTextNode("Support: " + collection[i].support);
  li1.appendChild(newDevs);
  li2.appendChild(newEditors);
  li3.appendChild(newSupport);
  div.appendChild(ul);
  card.appendChild(div);
  let audio = document.createElement("audio");
  div.appendChild(audio);
  let sound = document.createElement("source");
  sound.setAttribute("src", collection[i].sound);
  audio.appendChild(sound);
  const game = document.getElementById('game'+i);
  game.addEventListener('click', () => { 
    audio.pause();
    audio.play()});
  i++;
});
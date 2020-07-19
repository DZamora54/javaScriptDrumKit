let clap = new Audio("../assets/sounds/clap.wav");
let hihat = new Audio("../assets/sounds/hihat.wav");
let kick = new Audio("../assets/sounds/kick.wav");
let openhat = new Audio("../assets/sounds/openhat.wav");
let boom = new Audio("../assets/sounds/boom.wav");
let ride = new Audio("../assets/sounds/ride.wav");
let snare = new Audio("../assets/sounds/snare.wav");
let tom = new Audio("../assets/sounds/tom.wav");
let tink = new Audio("../assets/sounds/tink.wav");
let sound;

/* START ADD EVENT LISTENER FOR KEYDOWN */
document.addEventListener("keydown", (e) => playDrum(e));
document.addEventListener("keyup", (e) => reformKey(e.key));
/* END ADD EVENT LISTENER FOR KEYDOWN */

/* START PLAYDRUM */
let playDrum = (e) => {
  console.log(`${e.keyCode} was pressed`);
  getSound(e.keyCode);
  sound.play();
  transformKey(e.key);
};
/* END PLAYDRUM */

let clickDrum = (clickedId) => {
  console.log(clickedId);
  getClickedSound(clickedId);
  transformClickedKey(clickedId);
  sound.play();
  setTimeout(reformClickedKey, 500, clickedId);
};

/* START TRANSFORM KEYS */
let transformKey = (key) => {
  console.log("key transforming");
  document.getElementById(`${key}Key`).classList.add("playing");
};
/* END TRANSFORM KEYS */

let transformClickedKey = (key) => {
  console.log("key transforming");
  document.getElementById(key).classList.add("playing");
};

let reformKey = (key) => {
  document.getElementById(`${key}Key`).classList.remove("playing");
};

let reformClickedKey = (key) => {
  console.log("reforming Key");
  console.log("still transformed");
  document.getElementById(key).classList.remove("playing");
};

/* START GETS THE CORRECT SOUND FILE FOR THE GIVEN KEYCODE */
let getSound = (keyCode) => {
  switch (keyCode) {
    case 65:
      sound = clap;
      break;
    case 83:
      sound = hihat;
      break;
    case 68:
      sound = kick;
      break;
    case 70:
      sound = openhat;
      break;
    case 71:
      sound = boom;
      break;
    case 72:
      sound = ride;
      break;
    case 74:
      sound = snare;
      break;
    case 75:
      sound = tom;
      break;
    case 76:
      sound = tink;
      break;
    default:
      sound = null;
  }
};
/* END GETS THE CORRECT SOUND FILE FOR THE GIVEN KEYCODE */

let getClickedSound = (keyCode) => {
  switch (keyCode) {
    case "aKey":
      sound = clap;
      break;
    case "sKey":
      sound = hihat;
      break;
    case "dKey":
      sound = kick;
      break;
    case "fKey":
      sound = openhat;
      break;
    case "gKey":
      sound = boom;
      break;
    case "hKey":
      sound = ride;
      break;
    case "jKey":
      sound = snare;
      break;
    case "kKey":
      sound = tom;
      break;
    case "lKey":
      sound = tink;
      break;
    default:
      sound = null;
  }
};

// a = 65, s = 83, d = 68, f = 70, g = 71, h = 72, j = 74, k = 75, l = 76

// let clap = new Audio("../assets/sounds/clap.wav");
// let hihat = new Audio("../assets/sounds/hihat.wav");
// let kick = new Audio("../assets/sounds/kick.wav");
// let openhat = new Audio("../assets/sounds/openhat.wav");
// let boom = new Audio("../assets/sounds/boom.wav");
// let ride = new Audio("../assets/sounds/ride.wav");
// let snare = new Audio("../assets/sounds/snare.wav");
// let tom = new Audio("../assets/sounds/tom.wav");
// let tink = new Audio("../assets/sounds/tink.wav");

// Changing where the audio files are linked to
let clap = new Audio(
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1159990/clap.wav"
);
let hihat = new Audio(
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1159990/hihat.wav"
);
let kick = new Audio(
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1159990/kick.wav"
);
let openhat = new Audio(
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1159990/openhat.wav"
);
let boom = new Audio(
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1159990/boom.wav"
);
let ride = new Audio(
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1159990/ride.wav"
);
let snare = new Audio(
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1159990/snare.wav"
);
let tom = new Audio(
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1159990/tom.wav"
);
let tink = new Audio(
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1159990/tink.wav"
);
let sound;

/* START ADD EVENT LISTENER FOR KEYDOWN */
document.addEventListener("keydown", (e) => playDrum(e));
document.addEventListener("keyup", (e) => reformKey(e.key));
/* END ADD EVENT LISTENER FOR KEYDOWN */

/* START PLAYDRUM */
let playDrum = (e) => {
  console.log(`${e.keyCode} was pressed`);
  getSound(e.keyCode);
  sound.currentTime = 0;
  sound.play();
  transformKey(e.key);
};
/* END PLAYDRUM */

/* START CLICK DRUM */
let clickDrum = (clickedId) => {
  console.log(clickedId);
  getClickedSound(clickedId);
  sound.currentTime = 0;
  transformClickedKey(clickedId);
  sound.play();
  setTimeout(reformClickedKey, 500, clickedId);
};
/* END CLICK DRUM */

/* START TRANSFORM KEYS */
let transformKey = (key) => {
  console.log(`${key}Key`);
  document.getElementById(`${key}Key`).classList.add("playing");
};
/* END TRANSFORM KEYS */

/* START TRANSFORM CLICKED KEYS */
let transformClickedKey = (key) => {
  document.getElementById(key).classList.add("playing");
};
/* END TRANSFORM CLICKED KEYS */

/* START REFORM KEYS */
let reformKey = (key) => {
  document.getElementById(`${key}Key`).classList.remove("playing");
};
/* END REFORM KEYS */

/* START REFORM CLICKED KEYS */
let reformClickedKey = (key) => {
  document.getElementById(key).classList.remove("playing");
};
/* END REFORM CLICKED KEYS */

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

/* START GET THE CLICKED SOUND */
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
/* END GET THE CLICKED SOUND */
// a = 65, s = 83, d = 68, f = 70, g = 71, h = 72, j = 74, k = 75, l = 76

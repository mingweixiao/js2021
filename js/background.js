const images = ["01.jpg", "02.jpg", "03.jpg"];
const chosenImage = images[Math.floor(Math.random()*images.length)];

const wallpaper = document.createElement("img");
wallpaper.src = `img/${chosenImage}`;
//document.body.appendChild(wallpaper);
document.body.style.backgroundImage = `url(img/${chosenImage})`;
//console.log();

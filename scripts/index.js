//Author
//Nathan O'Brien
//ND Marketing Ltd
// Open Source

//*************************SPACE DROP BACKGROUND WITH CLASSES***********************

//Declaring all the Constants
const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
// Apply globals to Canvas

canvas.width = WIDTH;
canvas.height = HEIGHT;
// Create Empty Star Array
let starArray = [];
const RADIUS = 3;

// Resizing and resetting values by a simple Reload
window.onresize = function() { 
  starArray = [];
  location.reload(); 
}

// Creating the Array of Color (objects)
const colors = [
  {
    color: "rgba(255, 255, 255, 1)",
    shadowColor: "rgba(255, 255, 255, 0.5)",
    shadowBlur: 3,
  },

  {
    color: "rgba(255, 254, 196, 1)",
    shadowColor: "rgba(255, 254, 196, 0.5)",
    shadowBlur: 4,
  },

  {
    color: "rgba(192, 247, 255, 1)",
    shadowColor: "rgba(192, 247, 255, 0.5)",
    shadowBlur: 7,
  },
];
//Creating the Star Class
class Star {
  constructor(x, y, r, color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    ctx.fillStyle = colors[this.color].color;
    ctx.shadowBlur = colors[this.color].shadowBlur;
    ctx.shadowColor = colors[this.color].shadowColor;
    ctx.fill();
  }
}
// Creating the Stars Array with Random Values
const createStar = () => {
  starArray.push(
    new Star(
      RADIUS + Math.random() * WIDTH,
      RADIUS + Math.random() * HEIGHT,
      (RADIUS-1) * Math.random(),
      Math.floor(Math.random() * 3)
    )
  );
};
// Drawing the Stars to the Screen
const drawStars = () => {
  starArray.forEach((star) => {
    star.draw();
  });
};
// Initiating
const init = () => {
    createStar();
    drawStars();
   
};
//Animation Loop
const animation = setInterval( () => { 
    init();
}, 48);

// Cancel Animation after 10 seconds
setTimeout(() => {
    clearInterval(animation);
}, 10000);


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.querySelector(".carousel-container");
const images = [
  "./assets/carousel/mountains.jpeg",
  "./assets/carousel/computer.jpeg",
  "./assets/carousel/trees.jpeg",
  "./assets/carousel/turntable.jpeg"
];

const carouselCreator = () => {
  let elements = [];

  const carousel = document.createElement("div");
  carousel.classList.add("carousel");

  const left = document.createElement("div");
  left.classList.add("left-button");
  left.textContent = "<";

  left.addEventListener("click", e => {
    let carouselDOM = document.querySelector(".carousel");
    cycleImages(carouselDOM, "left");
  });

  elements.push(left);

  for (let i = 0; i < images.length; i++) {
    let cur = document.createElement("img");
    cur.src = images[i];
    elements.push(cur);
  }

  elements[1].style.display = "inline";

  const right = document.createElement("div");
  right.classList.add("right-button");
  right.textContent = ">";

  right.addEventListener("click", e => {
    let carouselDOM = document.querySelector(".carousel");
    cycleImages(carouselDOM, "right");
  });

  elements.push(right);

  elements.forEach(e => {
    carousel.appendChild(e);
  });

  carouselContainer.appendChild(carousel);
  console.log();
};

carouselCreator();

let curImageNum = 1;
const cycleImages = (carouselDOM, direction) => {
  if (direction === "right") {
    if (curImageNum < 4) {
      carouselDOM.children[curImageNum].style.display = "none";
      curImageNum = curImageNum + 1;
      carouselDOM.children[curImageNum].style.display = "inline";
    } else {
      curImageNum = 1;
      carouselDOM.children[4].style.display = "none";
      carouselDOM.children[curImageNum].style.display = "inline";
    }
  } else {
    if (curImageNum === 1) {
      carouselDOM.children[curImageNum].style.display = "none";
      curImageNum = 4;
      carouselDOM.children[curImageNum].style.display = "inline";
    } else {
      carouselDOM.children[curImageNum].style.display = "none";
      curImageNum--;
      carouselDOM.children[curImageNum].style.display = "inline";
    }
  }
};

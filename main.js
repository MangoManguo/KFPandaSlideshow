// Kung Fu Panda Slideshow / Gallery

// Global variable
let imgPaths = [
  "po.png",
  "tigress.png",
  "viper.png",
  "monkey.png",
  "mantis.png",
  "crane.png",
  "po.png",
  "tigress.png",
  "viper.png",
];

// Create image gallery
let imgContainerE1 = document.getElementById("img-container");
for (let i = 0; i < imgPaths.length; i++) {
  imgContainerE1.innerHTML += `<img src='images/${imgPaths[i]}'/>`;
}

// let imgIndex = 0;

// // Event listeners
// document.getElementById("next").addEventListener("click", nextSlide);
// document.getElementById("random").addEventListener("click", randomSlide);
// document.getElementById("prev").addEventListener("click", prevSlide);

// // Event fucntiosn
// function nextSlide() {
//   // Increment index, loop if necessary
//   imgIndex++;
//   if (imgIndex == imgPaths.length) {
//     imgIndex = 0;
//   }

//   // Display the new image
//   document.getElementById("characterImg").src = `images/${imgPaths[imgIndex]}`;
// }

// function randomSlide() {
//   // Get a random index: integer b/t 0/5 and up to the length of the array
//   imgIndex = randomInt(0, imgPaths.length);
//   document.getElementById("characterImg").src = `images/${imgPaths[imgIndex]}`;
// }

// function prevSlide() {
//   // Increment index, loop if necessary
//   imgIndex--;
//   if (imgIndex == 0) {
//     imgIndex = imgPaths.length;
//   }

//   // Display the new image
//   document.getElementById("characterImg").src = `images/${imgPaths[imgIndex]}`;
// }

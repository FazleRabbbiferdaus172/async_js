const imageContainer = document.querySelector("#app");

function wait(seconds) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, seconds * 1000);
  });
}

function createImage(img_path) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = img_path;
    img.addEventListener("load", function () {
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
}

function ImagePhaseInOut(img) {
  let currentImage;
  return createImage(img)
    .then((img) => {
      currentImage = img;
      imageContainer.append(img);
      return wait(2);
    })
    .then(() => {
      currentImage.style.display = "none";
    })
    .catch((err) => console.error(err));
}

const images_array = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
];


for (let i=0, p = Promise.resolve(); i < 4; i++) {
    p = p.then(() => ImagePhaseInOut(images_array[i]));
}

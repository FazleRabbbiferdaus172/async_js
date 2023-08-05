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

async function loadAndPause (imgSrc) {
  img = await createImage(imgSrc);
  imageContainer.append(img);
  await wait(2);
  img.style.display = 'none';
}

async function loadAll (imgArray) {
  let imgs = images_array.map(async function(i){
    return await createImage(i);
  })
  console.log(imgs);
  imgsEl = await Promise.all(imgs);
  console.log(imgsEl);
  let prevImg = 1;
  imgsEl.forEach(async i => {
    imageContainer.append(i);
    prevImg += 1;
    await wait(prevImg*2);
    i.style.display = 'none';
    i.remove(i);
  });

}

const images_array = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
];

// loadAndPause("images/1.jpg");
loadAll(images_array);

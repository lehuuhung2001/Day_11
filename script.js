var img_show = document.querySelector(".img-show");
var list = document.querySelector(".list-img");
var list_img = document.querySelectorAll(".list-img img");
var img = document.querySelector(".img-show img");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var imgFeature = document.querySelector(".image-feature");

var currentIndex = 0;
list_img.forEach((item, index) => {
  item.addEventListener("mouseover", function () {
    currentIndex = index;
    createImage();
  });
});

next.addEventListener("click", function () {
  console.log(currentIndex);
  if (currentIndex < list_img.length - 1) {
    currentIndex++;
  } else if (currentIndex == list_img.length - 1) {
    currentIndex = 0;
  }
  imgFeature.style.animation = "";
  setTimeout(() => {
    createImage();
    imgFeature.style.animation = "slideRight 1s ease-in-out forwards";
  }, 400);
});
prev.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
  } else if (currentIndex == 0) {
    currentIndex = list_img.length - 1;
  }

  imgFeature.style.animation = "";
  setTimeout(() => {
    createImage();
    imgFeature.style.animation = "slideLeft 1s ease-in-out forwards";
  }, 400);
});

function createImage() {
  img.src = list_img[currentIndex].src;
  // imgFeature.style.opacity = "0";
  // setTimeout(() => {
  //   img.src = list_img[currentIndex].src;

  //   imgFeature.style.opacity = "1";
  // }, 300);

  list_img.forEach((item, index) => {
    item.classList.remove("active");
    if (currentIndex === index) {
      item.classList.add("active");
    }
  });
}

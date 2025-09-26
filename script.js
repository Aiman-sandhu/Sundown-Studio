function menuanimation(){
  let menu = document.querySelector("nav h3");
  let full = document.querySelector(".full-scr");
  let navImg = document.querySelector("nav img");
  let flag = 0;

  menu.addEventListener("click", function(){
    if (flag === 0){
      full.style.top = "0";
      navImg.style.opacity = 0;
      menu.textContent = "Close";  // toggle text
      flag = 1;
    } else {
      full.style.top = "-100%";
      navImg.style.opacity = 1;
      menu.textContent = "Menu";   // toggle text back
      flag = 0;
    }
  });
}
menuanimation();



const fixedImg = document.getElementById("fixedimg");
const elements = document.querySelectorAll(".elem1");

elements.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    const imgUrl = elem.getAttribute("data-image");

    if (imgUrl) {
      fixedImg.style.backgroundImage = `url(${imgUrl})`;
      fixedImg.style.display = "block";
    }
  });

  elem.addEventListener("mouseleave", () => {
    fixedImg.style.display = "none";
  });
});

const capText = document.querySelectorAll(".cap-text h2 a");
capText.forEach((e) => {
  e.addEventListener("click", function (event) {
    event.preventDefault();
    document
      .querySelectorAll(".cap-text h2 a")
      .forEach((a) => a.classList.remove("active"));
    e.classList.add("active");
    const newimg = e.getAttribute("data-image");
    document.querySelector(".page4-img img").src = newimg;
  });
});
//moblie view
  function loadMobileImages() {
    if (window.innerWidth <= 768) {
      document.querySelectorAll(".elem1").forEach(elem => {
        const imgUrl = elem.getAttribute("data-image");
        if (imgUrl && !elem.querySelector("img")) {
          const img = document.createElement("img");
          img.src = imgUrl;
          elem.appendChild(img);
        }
      });
    }
  }

  loadMobileImages();
  window.addEventListener("resize", loadMobileImages);
function loader(){
const loader = document.querySelector("#loader");
setTimeout(function(){
loader.style.top = "-100%"
},4000)
}
loader()

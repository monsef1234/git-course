const preLoad = document.getElementsByClassName("pre-load")[0];
window.addEventListener("load", (eo) => {
  preLoad.classList.add("hide-pre-load");
});
// --------------------------------------------- //
const searchBar = document.querySelector(
  "body > header > div > div > i.fas.fa-search"
);
const closee = document.querySelector(".popup-search .fa-times");
searchBar.addEventListener("click", (eo) => {
  const popUp = document.getElementsByClassName("popup-search")[0];
  const close = document.querySelector(".popup-search .fa-times");
  const search = document.querySelector(".popup-search input");
  const searchBarv2 = document.querySelector(".popup-search .fa-search");
  popUp.classList.add("height");
  setTimeout(() => {
    close.style.visibility = "visible";
  }, 90);
  search.style.display = "block";
  searchBarv2.style.display = "block";
});
closee.addEventListener("click", (eo) => {
  const popUp = document.getElementsByClassName("popup-search")[0];
  const search = document.querySelector(".popup-search input");
  const searchBarv2 = document.querySelector(".popup-search .fa-search");
  closee.style.visibility = "hidden";
  popUp.classList.remove("height");
  search.style.display = "none";
  searchBarv2.style.display = "none";
});
// --------------------------------------------- //
const boxes = document.querySelectorAll(".landing .container .box");
const right = document.querySelector(".landing i:first-of-type");
const left = document.querySelector(".landing i:last-of-type");
const spans = document.querySelectorAll(".active");
let i = 0;
spans[i].classList.add("here");
// When we click on Spans in the bottom of the landing page
spans.forEach((span, index) => {
  span.style.marginRight = "5px";
  span.addEventListener("click", (eo) => {
    i = index;
    boxes.forEach((box) => {
      box.style.transform = `translateX(-${i * 120}%)`;
    });
    spans.forEach((span) => {
      span.classList.remove("here");
    });
    span.classList.add("here");
  });
});
// add css to all boxes using js "left"
boxes.forEach((box, index) => {
  box.style.left = `${index * 120}%`;
});
// using function to make the slide of the landing page
const slide = () => {
  if (i === boxes.length) {
    i = 0;
  }
  if (i < 0) {
    i = 0;
  }
  boxes.forEach((box) => {
    box.style.transform = `translateX(-${i * 120}%)`;
  });
  spans[i].classList.add("here");
};
//  move the landing page automatically
const stop = setInterval(() => {
  spans.forEach((span) => {
    span.classList.remove("here");
  });
  i++;
  slide();
}, 2500);
clearInterval(stop);
//  When we click the angle right
right.addEventListener("click", (eo) => {
  i++;
  spans.forEach((span) => {
    span.classList.remove("here");
  });
  slide();
});
//  When we click the angle left
left.addEventListener("click", (eo) => {
  i--;
  spans.forEach((span) => {
    span.classList.remove("here");
  });
  slide();
});

// --------------------------------------------- //
const nav = document.querySelector("header .container ul");
const navBar = document.querySelectorAll("header .container ul li");
const homePage = document.getElementById("home");
const dishesPage = document.getElementById("dishes");
const aboutPage = document.getElementById("about");
const menuPage = document.getElementById("menu");
const reviewPage = document.getElementById("review");
const orderPage = document.getElementById("order");
navBar.forEach((bar) => {
  bar.addEventListener("click", (eo) => {
    eo.preventDefault();
    const getId = bar.firstChild.getAttribute("href").slice(1);
    const findById = document.getElementById(getId);
    window.scrollTo({
      top: findById.offsetTop - 50,
      left: 0,
    });
    nav.classList.remove("toggleforheight");
  });
});
const loopForRemoveActiveBar = () => {
  navBar.forEach((item) => {
    item.firstChild.classList.remove("active-nav");
  });
};
window.addEventListener("scroll", (eo) => {
  if (pageYOffset >= homePage.offsetTop) {
    loopForRemoveActiveBar();
    navBar[0].firstChild.classList.add("active-nav");
  }
  if (pageYOffset >= dishesPage.offsetTop - 150) {
    loopForRemoveActiveBar();
    navBar[1].firstChild.classList.add("active-nav");
  }
  if (pageYOffset >= aboutPage.offsetTop - 150) {
    loopForRemoveActiveBar();
    navBar[2].firstChild.classList.add("active-nav");
  }
  if (pageYOffset >= menuPage.offsetTop - 150) {
    loopForRemoveActiveBar();
    navBar[3].firstChild.classList.add("active-nav");
  }
  if (pageYOffset >= reviewPage.offsetTop - 150) {
    loopForRemoveActiveBar();
    navBar[4].firstChild.classList.add("active-nav");
  }
  if (pageYOffset >= orderPage.offsetTop - 150) {
    loopForRemoveActiveBar();
    navBar[5].firstChild.classList.add("active-nav");
  }
});
const bars = document.getElementsByClassName("fa-bars")[0];
bars.addEventListener("click", (eo) => {
  const nav = document.querySelector("header .container ul");
  nav.classList.toggle("toggleforheight");
  nav.style.height = `${nav.scrollHeight}px`;
  if (nav.classList.contains("toggleforheight")) {
    nav.style.height = `${nav.scrollHeight}px`;
  } else {
    nav.style.height = `0px`;
  }
});

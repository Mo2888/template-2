// Menu toggle____________________________________________________

let toggleMenuIcon = document.querySelector(".toggle-menu");
let menu = document.querySelector("header nav ul");

toggleMenuIcon.onclick=function(){
menu.classList.toggle("show");
}

// slide the LandingText__________________________________________


let currentSlide = 0;
const contentDivs = document.querySelectorAll(".text .content");
const bullets = document.querySelectorAll(".bullets li");

function showSlide(slideIndex) {
  contentDivs.forEach((div, index) => {
    if (index === slideIndex) {
      div.style.display = "block";
    } else {
      div.style.display = "none";

    }
  });
  
  bullets.forEach((bullet, index) => {
    if (index === slideIndex) {
      bullet.classList.add("active");
    } else {
      bullet.classList.remove("active");
    }
  });
}

function slide(direction) {
  currentSlide += direction;
  
  if (currentSlide < 0) {
    currentSlide = contentDivs.length - 1;
  } else if (currentSlide >= contentDivs.length) {
    currentSlide = 0;
  }
  
  showSlide(currentSlide);
}

function liClick(slideIndex) {
  currentSlide = slideIndex - 1;
  showSlide(currentSlide);
}

showSlide(currentSlide);

/// scroll button
let scroll = document.querySelector(".scroll");
window.onscroll = function(){
    if(window.scrollY>=1000){
        scroll.style.display="block";
    }else{
        scroll.style.display="none";
    }
}
scroll.onclick=function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth",
    });
};
// testimonials bullets 

let tabLinks =document.getElementsByClassName("tab-links");
let tabcontents =document.getElementsByClassName("tab-contents");
function opentab (tabname){
    for(tablink of tabLinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
window.event.currentTarget.classList.add("active-link");
document.getElementById(tabname).classList.add("active-tab");
}
// Get the current year
const currentYear = new Date().getFullYear();

// Update the copyright year dynamically
const copyrightYearElement = document.querySelector(".copyright .time");
if (copyrightYearElement) {
    copyrightYearElement.textContent = currentYear;
}
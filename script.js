//onscroll navbar + display myBtn
let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    document.getElementById("navbar").classList.add("scrolled");
    document.getElementById("nav-logo").classList.add("scrolled-logo");
    mybutton.style.display = "block";
  } else {
    document.getElementById("navbar").classList.remove("scrolled");
    document.getElementById("nav-logo").classList.remove("scrolled-logo");
    mybutton.style.display = "none";
  }
}
//onscroll navbar + display myBtn(kleiste rantevou)
//
//responsive navbar
function myFunction() {
  var x = document.getElementById("nav-container");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
//responsive navbar
// --------------------Swiper Works--------------------
var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
  loop: true,
});
// --------------------Swiper Works-----------TELOS-----

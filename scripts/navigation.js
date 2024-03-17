window.addEventListener("scroll", navChange);


function navChange() {
 let nav = document.querySelector("#navbar");
   nav.classList.toggle("navdark",window.scrollY > 70);
}

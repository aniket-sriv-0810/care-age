// Automatically scroll to the top on page load (refresh)
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.onload = function() {
    scrollToTop();
};

// Add a scroll event listener
document.addEventListener('scroll', function() {
    var nav = document.querySelector('#nav-div-bar');
    
    // Check if the user has scrolled past the navigation bar
    if (window.scrollY > nav.offsetHeight) {
        // If yes nb, add a class to make it sticky
        nav.classList.add('sticky');
    } else {
        // If not, remove the class
        nav.classList.remove('sticky');
    }
});

// nav items
let item1 = document.getElementById("content-02");
let item2 = document.getElementById("content-03");
let item3 = document.getElementById("content-04");
let item4 = document.getElementById("content-05");
let item5 = document.getElementById("content-06");

let about = document.querySelector('.about');
let services = document.querySelector('.head-service');
let contact = document.querySelector('.footer-distributed');
let loc = document.querySelector('.container-location');
// go to event to particular section of nav
item1.addEventListener("click",()=>{
    about.scrollIntoView({behavior: "smooth"});
})
item2.addEventListener("click",()=>{
    services.scrollIntoView({behavior: "smooth"});
})
item3.addEventListener("click",()=>{
    contact.scrollIntoView({behavior: "smooth"});
})
item4.addEventListener("click",()=>{
    window.location.href='mailto:aryansharma35x@gmail.com';
})
item5.addEventListener("click",()=>{
    loc.scrollIntoView({behavior: "smooth"});
})

let nav_btn = document.querySelector('#btn-nav');
nav_btn.addEventListener('click',()=>{
    window.open('booking.html');
})
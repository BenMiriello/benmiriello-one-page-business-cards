// MOBILE
    
// remove unoptimized elements
document.querySelector(".keyboard").remove();
document.querySelector(".wrapper").className = "mobile-wrapper"

// get cards
const cardFront = document.querySelector(".card.front");
const cardBack = document.querySelector(".card.back");

// initial remove unoptimized card styling

cardFront.className = "card front shadow-transition mobile-card"
cardBack.className = "card back shadow-transition mobile-card"

// cardFront.style.transform = "rotateZ(0deg)";
// cardFront.style["-webkit-transform"] = "rotateZ(0deg)";
cardFront.style.transform = "translateY(-15%)"
cardFront.style["-webkit-transform"] = "translateY(-15%)"
cardFront.style.left = "0px";

cardBack.style.left = "0px";
cardBack.style.transform = "translateY(-15%)"
cardBack.style["-webkit-transform"] = "translateY(-15%)"

// card style edits conditional on window size
var ratio = window.devicePixelRatio || 1;
var w = screen.width * ratio;
var h = screen.height * ratio;

let mobileCardWidth = "92%";
let mobileCardHeight = `${Math.floor(document.documentElement.clientWidth * 0.572)}px`;

optimizeOneCardForMobile = (card) => {
    card.style.width = mobileCardWidth;
    card.style.height = mobileCardHeight;
    card.style["min-height"] = mobileCardHeight;
};

const optimizeCardsForMobile = (cardFront, cardBack) => {
    optimizeOneCardForMobile(cardFront);
    optimizeOneCardForMobile(cardBack);
};

optimizeCardsForMobile(cardFront, cardBack);

// adding event listener for window resize (mobile only)
window.addEventListener("resize", () => {
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight; 
    optimizeCardsForMobile(cardFront, cardBack);
});


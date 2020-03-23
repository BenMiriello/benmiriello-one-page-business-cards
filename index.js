// LIGHT ANIMATION
document.onmousemove = e => {
    document.querySelector(".wrapper").style.transform = `translate(-${e.clientX * 0.01}px, -${e.clientY * 0.01}px)`
    document.querySelector(".light").style.transform = `translate(-${e.clientX * 0.1}px, -${e.clientY * 0.1}px)`
}

// COPY TO CLIPBOARD

// remove popup span and text if unable to copy to clipboard
if (!navigator.clipboard) {
    let copySpans = document.getElementsByClassName("tooltiptext")
    Array.from(copySpans).forEach(span => span.remove())
}

handleCopyClipboard = copyText => {
    const tooltip = document.getElementById(copyText);
    if (navigator.clipboard) {
        navigator.clipboard.writeText(copyText)
        .then(() => {
            tooltip.innerHTML = "copied: " + copyText;
        })
        .catch(() => {
            tooltip.innerHTML = "unable to copy";
        })
    } else {
        tooltip.innerHTML = "unable to copy";
    }
}

handeOutCopyClipboard = copyText => {
    const tooltip = document.getElementById(copyText);
    tooltip.innerHTML = "copy to clipboard";
}

// const wrapper = document.querySelector(".wrapper")
// if (window.innerHeight < 500) {
//     wrapper.style["background-size"] = "1000px"
// } 


// DETECT MOBILE BROWSER (NO CHANGES MADE YET)

let browserIsMobile = () => {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((mobileName) => {
        return navigator.userAgent.match(mobileName);
    });
}

if (browserIsMobile()) {
        
    document.querySelector(".keyboard").remove()
    const cardFront = document.querySelector(".card.front")
    const cardBack = document.querySelector(".card.back")

    const optimizeCardsForMobile = (cardFront, cardBack) => {
        let mobileWidth = "95%"
        let mobileHeight = `${Math.floor(cardFront.offsetWidth * 0.572)}px`

        cardFront.style.width = mobileWidth
        cardFront.style.height = mobileHeight
        cardBack.style.width = mobileWidth
        cardBack.style.height = mobileHeight
    }

    optimizeCardsForMobile(cardFront, cardBack)

    // Adding event listener for window resize (for mobile)
    window.addEventListener("resize", () => {
        var w = document.documentElement.clientWidth;
        var h = document.documentElement.clientHeight; 
        optimizeCardsForMobile(cardFront, cardBack)  
    });
}


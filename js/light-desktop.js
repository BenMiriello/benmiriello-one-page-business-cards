// DESKTOP LIGHT ANIMATION (on mouse position)

const wrapper = document.querySelector(".wrapper"); 
const light = document.querySelector(".light");

document.onmousemove = event => {
    // wrapper.style.transform = `translate(-${event.clientX * 0.005}px, -${event.clientY * 0.005}px)`;
    light.style.transform = `translate(-${event.clientX * 0.1}px, -${event.clientY * 0.1}px)`;
    console.log(event.clientX, event.clientY)
    console.log(document.querySelector(".light").style.transform);
};


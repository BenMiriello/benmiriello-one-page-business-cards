// LIGHT ANIMATION
document.onmousemove = e => {
    document.querySelector(".wrapper").style.transform = `translate(-${e.clientX * 0.01}px, -${e.clientY * 0.01}px)`
    document.querySelector(".light").style.transform = `translate(-${e.clientX * 0.1}px, -${e.clientY * 0.1}px)`
}

// COPY TO CLIPBOARD

// disable popup span and text if unable to copy to clipboard
if (!navigator.clipboard) {
    let copySpans = document.getElementsByClassName("tooltiptext")
    Array.from(copySpans).forEach(span => span.className = "")
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
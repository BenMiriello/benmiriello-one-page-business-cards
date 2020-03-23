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


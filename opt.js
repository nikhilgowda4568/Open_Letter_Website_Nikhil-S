const typewriterText = "India’s Startup Pioneers and Future-Shapers...";
const typewriterElement = document.getElementById("typewriter");
let index = 0;

function typeWriter() {
    if (index < typewriterText.length) {
        typewriterElement.innerHTML += typewriterText.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

document.addEventListener("DOMContentLoaded", typeWriter);

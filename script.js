const bg = document.querySelector(".bg");

function createBubble() {
    const heart = document.createElement("div");
    heart.className = "heart";

    const size = 16 + Math.random() * 12;
    heart.style.animationDuration = (5 + Math.random() * 4) + 's';
    heart.style.width = heart.style.height = size + 'px';
    heart.style.left = Math.random() * 100 + 'vw';

    bg.appendChild(heart);

    setTimeout(() =>{
        heart.remove();
    }, 8000);
}

setInterval(createBubble, 500);
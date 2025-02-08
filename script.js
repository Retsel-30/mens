document.addEventListener("DOMContentLoaded", function() {
    const messageSound = document.getElementById("messageSound");
    const finalSound = document.getElementById("finalSound");
    let audioEnabled = false;

    function enableAudio() {
        if (!audioEnabled) {
            audioEnabled = true;
            messageSound.play().catch(() => console.log("Autoplay bloqueado, esperando interacción..."));
            finalSound.play().catch(() => console.log("Autoplay bloqueado, esperando interacción..."));
            console.log("🎵 Sonidos activados");
        }
    }

    document.body.addEventListener("click", enableAudio, { once: true }); // Activa el audio con el primer clic

    setTimeout(() => {
        document.getElementById("introMessage").classList.add("hidden");
        document.getElementById("initialMessage").classList.remove("hidden");
        if (audioEnabled) messageSound.play();
    }, 2000); 

    setTimeout(() => {
        document.getElementById("initialMessage").classList.add("hidden");
        document.getElementById("typingEffect").classList.remove("hidden");
    }, 5000); 

    setTimeout(() => {
        document.getElementById("typingEffect").classList.add("hidden");
        document.getElementById("finalMessage").classList.remove("hidden");
        if (audioEnabled) finalSound.play();
        launchHearts();
    }, 8000); 
});

// 💖 Genera corazones animados
function launchHearts() {
    const heartContainer = document.getElementById("heart-container");

    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            let heart = document.createElement("div");
            heart.classList.add("heart");
            heart.innerHTML = "❤️";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = Math.random() * 2 + 3 + "s";
            heartContainer.appendChild(heart);
            setTimeout(() => { heart.remove(); }, 10000);
        }, i * 300);
    }
}

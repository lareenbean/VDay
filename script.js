// DOM elements
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const no2Btn = document.getElementById("no2Btn"); // second no button
const prizeBtn = document.getElementById("prizeBtn");
const question = document.getElementById("question");
const gif = document.getElementById("gif");
const sureText = document.getElementById("sureText");

let noClicks = 0;

/* ❤️ Hearts animation */
function createHearts() {
    const hearts = document.querySelector('.hearts');
    const heart = document.createElement('div');

    heart.classList.add('heart');
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';

    hearts.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHearts, 300);

/* 😈 Original No button with dodging effect */
noBtn.addEventListener("click", handleNoClick);

function handleNoClick() {
    noClicks++;

    if (noClicks >= 7) {
        // Show the "Wow... I see how it is..." message
        question.innerText = "Wow...I see how it is...";
        gif.src = "mocha_sad.gif";

        // Hide original buttons
        yesBtn.classList.add("hidden");
        noBtn.classList.add("hidden");

        // Show "Are you sure?" text and new No button
        sureText.classList.remove("hidden");
        no2Btn.classList.remove("hidden");

        // Reset styles
        no2Btn.style.transform = "translate(0,0)";
        no2Btn.style.position = "relative";

        return;
    }

    // Dodging effect before 7 clicks
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

/* 💜 YES button sequence */
yesBtn.addEventListener("click", () => {
    showYaySequence();
});

/* 💜 Second No button triggers same YAY sequence */
no2Btn.addEventListener("click", () => {
    showYaySequence();
});

/* 🎁 Reveal prize */
prizeBtn.addEventListener("click", () => {
    document.getElementById("prizeLetter").classList.remove("hidden");
});

/* Function to show YAY sequence */
function showYaySequence() {
    question.innerText = "YAYYYY 💜🥰";
    gif.src = "happy.gif";

    // Hide all buttons and text
    yesBtn.classList.add("hidden");
    noBtn.classList.add("hidden");
    no2Btn.classList.add("hidden");
    sureText.classList.add("hidden");

    // Reveal prize button
    prizeBtn.classList.remove("hidden");
}

const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question" );
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
question. innerHTML = "Aaaaa, I love you too";
gif.src =
"https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
});

noBtn.addEventListener("click", () => {
    question. innerHTML = "Click yes!!!";
    gif.src =
    "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
});
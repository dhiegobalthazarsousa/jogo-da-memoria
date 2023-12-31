const emojis = [
    "😂",
    "😂",
    "😍",
    "😍",
    "🤖",
    "🤖",
    "👽",
    "👽",
    "🐉",
    "🐉",
    "👹",
    "👹",
];

let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5) ? 2 : -1);

for(let i=0; i < emojis.length; i++){
    let box = document.createElement("div");
    box.classList.add("item");
    box.innerHTML = shuffleEmojis[i];
    document.querySelector(".game").appendChild(box);
}

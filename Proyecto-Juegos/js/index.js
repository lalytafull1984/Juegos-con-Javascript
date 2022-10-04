//Puzzle

const imagenes = [
    'img-0', 'img-1', 'img-2',
    'img-3'
];

const puzzle = document.getElementById("puzzle");
const piezas = document.getElementById("piezas");
const mensaje = document.getElementById("mensaje");
let terminado = imagenes.length;

while (imagenes.length) {
    const index = Math.floor(Math.random() * imagenes.length);
    const div = document.createElement("div");
    div.className = "pieza";
    div.id = imagenes[index];
    div.draggable = true;
    div.style.backgroundImage = `url("../img-puzzle/${imagenes[index]}.jpg")`;
    piezas.appendChild(div);
    imagenes.splice(index, 1);
}

for (let i = 0; i < terminado; i++) {
    const div = document.createElement("div");
    div.className = "placeholder";
    div.dataset.id = i;
    puzzle.appendChild(div);
}


piezas.addEventListener("dragstart", e => {
    e.dataTransfer.setData("id", e.target.id);
});

puzzle.addEventListener("dragover", e => {
    e.preventDefault();
    e.target.classList.add("hover");
});

puzzle.addEventListener("dragleave", e => {
    e.target.classList.remove("hover");
});

puzzle.addEventListener("drop", e => {
    e.target.classList.remove("hover");

    const id = e.dataTransfer.getData("id");
    const numero = id.split('-')[1];

    if (e.target.dataset.id === numero) {
        e.target.appendChild(document.getElementById(id));

        terminado--;

        if (terminado === 0) {
            document.body.classList.add("ganaste");
        }
    }
});

//Sonidos de animales

const boton1 = document.getElementById("btn-1");
const boton2 = document.getElementById("btn-2");
const boton3 = document.getElementById("btn-3");
const boton4 = document.getElementById("btn-4");
const boton5 = document.getElementById("btn-5");
const boton6 = document.getElementById("btn-6");
const boton7 = document.getElementById("btn-7");
const boton8 = document.getElementById("btn-8");


boton1.addEventListener("click", e => {
    const audio1 = document.createElement("audio");
    audio1.setAttribute("src", "../mp3/sound-1.wav");
    audio1.play();
});

boton2.addEventListener("click", e => {
    const audio2 = document.createElement("audio");
    audio2.setAttribute("src", "../mp3/sound-2.wav");
    audio2.play();
});

boton3.addEventListener("click", e => {
    const audio3 = document.createElement("audio");
    audio3.setAttribute("src", "../mp3/sound-3.mp3");
    audio3.play();
});

boton4.addEventListener("click", e => {
    const audio4 = document.createElement("audio");
    audio4.setAttribute("src", "../mp3/sound-4.mp3");
    audio4.play();
});

boton5.addEventListener("click", e => {
    const audio5 = document.createElement("audio");
    audio5.setAttribute("src", "../mp3/sound-5.wav");
    audio5.play();
});

boton6.addEventListener("click", e => {
    const audio6 = document.createElement("audio");
    audio6.setAttribute("src", "../mp3/sound-6.wav");
    audio6.play();
});

boton7.addEventListener("click", e => {
    const audio7 = document.createElement("audio");
    audio7.setAttribute("src", "../mp3/sound-7.mp3");
    audio7.play();
});

boton8.addEventListener("click", e => {
    const audio8 = document.createElement("audio");
    audio8.setAttribute("src", "../mp3/sound-8.wav");
    audio8.play();
});


//Mezcla de colores

const color1 = document.querySelector("#color-1");
const color2 = document.querySelector("#color-2");

color1.addEventListener("dragstart", e => {
    color1.classList.add("dragging");
    e.dataTransfer.setData("id", color1.id);
});

color1.addEventListener("dragend", e => {
    color1.classList.remove("dragging");
    color2.classList.remove("hover");
});

color2.addEventListener("dragover", e => {
    e.preventDefault();
    color2.classList.add("hover");
});

color2.addEventListener("drop", e => {
    color2.appendChild(color1);
    color1.classList.add("fin");
    color2.classList.add("fin2");
});

const color3 = document.querySelector("#color-3");
const color4 = document.querySelector("#color-4");

color3.addEventListener("dragstart", e => {
    color3.classList.add("dragging");
    e.dataTransfer.setData("id", color3.id);
});

color3.addEventListener("dragend", e => {
    color3.classList.remove("dragging");
    color4.classList.remove("hover");
});

color4.addEventListener("dragover", e => {
    e.preventDefault();
    color4.classList.add("hover");
});

color4.addEventListener("drop", e => {
    color4.appendChild(color3);
    color3.classList.add("fin");
    color4.classList.add("fin3");
});

const color5 = document.querySelector("#color-5");
const color6 = document.querySelector("#color-6");

color5.addEventListener("dragstart", e => {
    color5.classList.add("dragging");
    e.dataTransfer.setData("id", color5.id);
});

color5.addEventListener("dragend", e => {
    color5.classList.remove("dragging");
    color6.classList.remove("hover");
});

color6.addEventListener("dragover", e => {
    e.preventDefault();
    color6.classList.add("hover");
});

color6.addEventListener("drop", e => {
    color6.appendChild(color5);
    color5.classList.add("fin");
    color6.classList.add("fin4");
});



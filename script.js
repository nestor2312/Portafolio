const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
let inicio = document.getElementById('inicio');
let closeBtn = document.querySelector('#close');
let Sobre_mi = document.getElementById('Sobre_mi');
let Skills = document.getElementById('Skills');
let Formación = document.getElementById('Formación');
let Proyectos = document.getElementById('Proyectos');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('visible');
});

closeBtn.addEventListener('click', () => {
    nav.classList.remove('visible');
});
Sobre_mi.addEventListener('click', () => {
    nav.classList.remove('visible');
});
Skills.addEventListener('click', () => {
    nav.classList.remove('visible');
});
Formación.addEventListener('click', () => {
    nav.classList.remove('visible');
});
Proyectos.addEventListener('click', () => {
    nav.classList.remove('visible');
});
inicio.addEventListener('click', () => {
    nav.classList.remove('visible');
});
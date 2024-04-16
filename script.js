const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const closeBtn = document.querySelector('.close');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    nav.classList.remove('active');
});
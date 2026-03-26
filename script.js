const button = document.querySelector('.enter-btn');
const app = document.querySelector('.app');
const splash = document.querySelector('.splash');

button.addEventListener('click', () => {

    splash.style.opacity = '0';

    setTimeout(() => {
        splash.style.display = 'none';
        app.classList.remove('hidden');
    }, 200);
});
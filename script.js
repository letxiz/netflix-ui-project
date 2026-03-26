const sound = document.getElementById('netflix-sound');
const button = document.querySelector('.enter-btn');
const app = document.querySelector('.app');
const splash = document.querySelector('.splash');
const transition = document.querySelector('.transition');

sound.load();

button.addEventListener('click', () => {

    splash.style.opacity = '0';

    setTimeout(() => {
        splash.style.display = 'none';

        // 🎬 mostra transição
        transition.classList.remove('hidden');
        transition.classList.add('active');

        // 🔊 som
        sound.currentTime = 0;
        sound.play();

        // 🔥 AQUI ESTÁ O SEGREDO (ativa o zoom)
        setTimeout(() => {
            transition.classList.add('zoom');
        }, 200);

        // ⏳ depois some
        setTimeout(() => {
            transition.style.opacity = '0';

            setTimeout(() => {
                transition.style.display = 'none';
                app.classList.remove('hidden');
            }, 800);

        }, 1500);

    }, 800);
});
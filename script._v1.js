// M�sica ambiente
const bgMusic = new Audio('https://cdn.pixabay.com/download/audio/2021/11/02/audio_29bb317b8c.mp3?filename=lofi-chill-11343.mp3');
bgMusic.loop = true;
bgMusic.volume = 0.3;
bgMusic.muted = true;

// Som de clique
const clickSound = new Audio('https://freesound.org/data/previews/256/256113_3263906-lq.mp3');
clickSound.volume = 0.2;

// Fun��o para tocar o som de clique
function playClickSound() {
    clickSound.currentTime = 0;
    clickSound.play().catch(err => {
        console.warn("N�o foi poss�vel tocar o som de clique:", err);
    });
}

// Fun��o para iniciar m�sica de fundo
function startBackgroundMusic() {
    if (bgMusic.muted) {
        bgMusic.muted = false;
        bgMusic.play().catch(err => {
            console.warn("N�o foi poss�vel iniciar a m�sica de fundo:", err);
        });
    }
}

// Adiciona eventos aos bot�es
document.querySelectorAll('.link-button').forEach(button => {
    button.addEventListener('click', () => {
        playClickSound();
        startBackgroundMusic();
        console.log(`Voc� clicou no link: ${button.textContent.trim()}`);
    });
});

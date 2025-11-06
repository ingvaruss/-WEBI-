// ===== ПЛАВНЫЙ ПАРАЛЛАКС ДЛЯ КАРТОЧЕК И МАТРИЦЫ =====
let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX - window.innerWidth / 2) * 0.001;
    mouseY = (e.clientY - window.innerHeight / 2) * 0.001;
});

function animateParallax() {
    // Плавное следование с интерполяцией
    currentX += (mouseX - currentX) * 0.08;
    currentY += (mouseY - currentY) * 0.08;
    
    const cardsContainer = document.querySelector('.cards-container');
    const matrixChars = document.querySelectorAll('.matrix-char');
    
    // Карточки - плавное движение
    if (cardsContainer) {
        const cardMoveX = currentX * 20;
        const cardMoveY = currentY * 20;
        cardsContainer.style.transform = `translateX(${cardMoveX}px) translateY(${cardMoveY}px)`;
    }
    
    // Матричные символы - очень легкое движение
    matrixChars.forEach((char, index) => {
        const depth = 0.01 + (index % 20) * 0.003;
        const matrixMoveX = currentX * depth * 15;
        const matrixMoveY = currentY * depth * 15;
        char.style.transform = `translateX(${matrixMoveX}px) translateY(${matrixMoveY}px)`;
    });
    
    requestAnimationFrame(animateParallax);
}

// Запускаем анимацию параллакса
animateParallax();

// Плавное появление
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1.5s ease-in';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

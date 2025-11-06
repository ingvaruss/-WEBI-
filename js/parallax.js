// ===== ПАРАЛЛАКС ДЛЯ КАРТОЧЕК И МАТРИЦЫ =====
document.addEventListener('mousemove', (e) => {
    const cardsContainer = document.querySelector('.cards-container');
    const matrixChars = document.querySelectorAll('.matrix-char');
    
    // Маленькая чувствительность для легкого движения
    const x = (e.clientX - window.innerWidth / 2) * 0.001;
    const y = (e.clientY - window.innerHeight / 2) * 0.001;
    
    // Карточки - легкое движение
    if (cardsContainer) {
        const cardMoveX = x * 15;
        const cardMoveY = y * 15;
        cardsContainer.style.transform = `translateX(${cardMoveX}px) translateY(${cardMoveY}px)`;
    }
    
    // Матричные символы - очень легкое движение (параллакс)
    matrixChars.forEach((char, index) => {
        const depth = 0.02 + (index % 10) * 0.005; // Разная глубина для слоев
        const matrixMoveX = x * depth * 10;
        const matrixMoveY = y * depth * 10;
        char.style.transform = `translateX(${matrixMoveX}px) translateY(${matrixMoveY}px)`;
    });
});

// Плавное появление
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s ease-in';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// УБИРАЕМ КАСТОМНЫЙ КУРСОР
// const cursor = document.createElement('div');
// cursor.classList.add('custom-cursor');
// document.body.appendChild(cursor);
// 
// document.addEventListener('mousemove', (e) => {
//     cursor.style.left = e.clientX + 'px';
//     cursor.style.top = e.clientY + 'px';
// });

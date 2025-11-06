// ===== CARD FLIP SYSTEM - ТОЛЬКО ПО КЛИКУ/ТАПУ =====
function flipCard(card) {
    card.classList.toggle('flipped');
    
    // Создаем частицы только при клике
    createParticleEffect(card);
}

// УБИРАЕМ АВТОПЕРЕВОРОТ ДЛЯ ДЕМОНСТРАЦИИ
// setTimeout(() => {
//     document.querySelectorAll('.flip-card').forEach((card, index) => {
//         setTimeout(() => {
//             card.classList.add('flipped');
//             setTimeout(() => {
//                 card.classList.remove('flipped');
//             }, 3000);
//         }, index * 1000);
//     });
// }, 2000);

function createParticleEffect(card) {
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            createParticle(centerX, centerY);
        }, i * 30);
    }
}

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: fixed;
        width: 6px;
        height: 6px;
        background: #00eeff;
        border-radius: 50%;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        z-index: 1000;
        opacity: 0;
    `;
    
    document.body.appendChild(particle);
    
    // Анимация частицы
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 80 + 40;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;
    
    let opacity = 0.8;
    const animate = () => {
        opacity -= 0.02;
        particle.style.opacity = opacity;
        particle.style.left = parseFloat(particle.style.left) + tx/20 + 'px';
        particle.style.top = parseFloat(particle.style.top) + ty/20 + 'px';
        
        if (opacity > 0) {
            requestAnimationFrame(animate);
        } else {
            particle.remove();
        }
    };
    
    animate();
}

// Добавляем обработчики для touch устройств
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('touchend', function(e) {
        e.preventDefault();
        flipCard(this);
    }, { passive: false });
});

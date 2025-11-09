// ===== УЛЬТРА-ОПТИМИЗИРОВАННАЯ МАТРИЦА =====
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Находим существующий matrix-bg и заменяем его содержимое на canvas
    const matrixBg = document.querySelector('.matrix-bg');
    if (!matrixBg) return;
    
    matrixBg.innerHTML = '';
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        opacity: 0.7;
        pointer-events: none;
    `;
    matrixBg.appendChild(canvas);
    
    // Параметры матрицы
    const fontSize = 16;
    const columns = Math.floor(window.innerWidth / 20);
    const drops = [];
    
    // Инициализация капель
    for (let i = 0; i < columns; i++) {
        drops.push({
            y: Math.random() * -100,
            speed: 1 + Math.random(),
            length: 12
        });
    }
    
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    function animate() {
        // Минимальный шлейф
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#0f0';
        ctx.font = `${fontSize}px monospace`;
        
        for (let i = 0; i < drops.length; i++) {
            const drop = drops[i];
            const x = i * 20;
            
            // Рисуем цепочку
            for (let j = 0; j < drop.length; j++) {
                const char = Math.random() > 0.5 ? '0' : '1';
                const y = drop.y - (j * fontSize);
                const opacity = 1 - (j / drop.length);
                ctx.globalAlpha = opacity;
                ctx.fillText(char, x, y);
            }
            
            ctx.globalAlpha = 1;
            drop.y += drop.speed;
            
            if (drop.y > canvas.height + drop.length * fontSize) {
                drop.y = -20;
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    // Запуск
    resize();
    animate();
    window.addEventListener('resize', resize);
});

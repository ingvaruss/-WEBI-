// ===== УЛУЧШЕННЫЙ ВЕРТИКАЛЬНЫЙ МАТРИЧНЫЙ ДОЖДЬ =====
function createEnhancedMatrixRain() {
    const matrixBg = document.querySelector('.matrix-bg');
    if (!matrixBg) {
        const newMatrixBg = document.createElement('div');
        newMatrixBg.className = 'matrix-bg';
        document.body.prepend(newMatrixBg);
        createEnhancedMatrixRain();
        return;
    }
    
    matrixBg.innerHTML = '';
    
    const chars = '01010101010101010101';
    const fontSize = 16;
    const columns = Math.floor(window.innerWidth / (fontSize * 0.8)); // Больше столбцов
    
    // Создаем больше столбцов для полного покрытия
    for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = (i * fontSize * 0.8) + 'px';
        column.style.animationDelay = (Math.random() * 15) + 's'; // Большой разброс
        column.style.animationDuration = (15 + Math.random() * 15) + 's'; // Разная скорость
        
        // Создаем длинные вертикальные цепочки
        const chainLength = 30 + Math.floor(Math.random() * 20);
        for (let j = 0; j < chainLength; j++) {
            const char = document.createElement('div');
            char.className = 'matrix-char';
            char.textContent = chars[Math.floor(Math.random() * chars.length)];
            
            // Разная яркость для глубины
            const brightness = 0.05 + Math.random() * 0.1;
            char.style.opacity = brightness.toFixed(2);
            
            // Разный размер для разнообразия
            const sizeVariation = fontSize + Math.random() * 4;
            char.style.fontSize = sizeVariation + 'px';
            
            column.appendChild(char);
        }
        
        matrixBg.appendChild(column);
    }
}

// Гарантированное создание матрицы на всех страницах
function initializeMatrix() {
    createEnhancedMatrixRain();
    
    // Пересоздаем при изменении размера
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(createEnhancedMatrixRain, 250);
    });
}

// Запускаем на всех событиях
window.addEventListener('load', initializeMatrix);
document.addEventListener('DOMContentLoaded', initializeMatrix);

// На всякий случай, если страница уже загружена
if (document.readyState === 'complete') {
    initializeMatrix();
}

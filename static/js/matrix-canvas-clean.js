// ===== ЧИСТАЯ CANVAS-МАТРИЦА =====
class MatrixRain {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.className = 'matrix-canvas';
        this.canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            opacity: 0.7;
            pointer-events: none;
        `;
        
        this.matrix = "01";
        this.fontSize = 16;
        this.columns = 0;
        this.drops = [];
        this.animationId = null;
        
        this.init();
    }
    
    init() {
        // Аккуратно вставляем canvas в существующий matrix-bg
        const matrixBg = document.querySelector('.matrix-bg');
        if (matrixBg) {
            // Очищаем только содержимое, не трогая стили
            matrixBg.innerHTML = '';
            matrixBg.appendChild(this.canvas);
        }
        
        this.resize();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.columns = Math.floor(this.canvas.width / 20);
        this.drops = [];
        
        for (let i = 0; i < this.columns; i++) {
            this.drops.push({
                y: Math.random() * -100,
                speed: 1 + Math.random() * 2,
                length: 15
            });
        }
    }
    
    animate() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.fillStyle = '#0f0';
        this.ctx.font = `${this.fontSize}px monospace`;
        
        for (let i = 0; i < this.drops.length; i++) {
            const drop = this.drops[i];
            const x = i * 20;
            
            for (let j = 0; j < drop.length; j++) {
                const char = this.matrix[Math.floor(Math.random() * this.matrix.length)];
                const y = drop.y - (j * this.fontSize);
                const opacity = 1 - (j / drop.length);
                this.ctx.globalAlpha = opacity;
                this.ctx.fillText(char, x, y);
            }
            
            this.ctx.globalAlpha = 1;
            drop.y += drop.speed;
            
            if (drop.y > this.canvas.height + drop.length * this.fontSize) {
                drop.y = -20;
            }
        }
        
        this.animationId = requestAnimationFrame(() => this.animate());
    }
}

// Минимальная инициализация
document.addEventListener('DOMContentLoaded', function() {
    new MatrixRain();
});

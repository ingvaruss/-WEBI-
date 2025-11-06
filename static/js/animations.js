// Анимация логотипа
function animateLogo() {
    const logo = document.querySelector('.logo');
    logo.style.animation = 'logoPulse 0.6s ease';
    setTimeout(() => {
        logo.style.animation = '';
    }, 600);
}

// Анимация появления элементов
document.addEventListener('DOMContentLoaded', () => {
    const titleLines = document.querySelectorAll('.title-line');
    titleLines.forEach((line, index) => {
        line.style.animationDelay = `${0.2 + index * 0.2}s`;
    });
    
    const subtitle = document.querySelector('.digital-subtitle');
    if (subtitle) {
        subtitle.style.animationDelay = '0.8s';
    }
});

// Стили для анимаций
const style = document.createElement('style');
style.textContent = `
    @keyframes logoPulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
    }
    
    .title-line {
        opacity: 0;
        transform: translateY(30px);
        animation: titleAppear 0.8s ease forwards;
    }
    
    .digital-subtitle {
        opacity: 0;
        transform: translateY(20px);
        animation: subtitleAppear 0.8s ease 0.8s forwards;
    }
    
    @keyframes titleAppear {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes subtitleAppear {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Flip-карточки для проектов - исправленная версия
class ProjectsFlipCards {
    constructor() {
        this.cards = document.querySelectorAll('.project-card');
        this.init();
    }
    
    init() {
        this.bindEvents();
    }
    
    bindEvents() {
        this.cards.forEach(card => {
            // Клик по карточке для переворота
            card.addEventListener('click', (e) => {
                // Не переворачиваем если кликнули по ссылке или кнопке
                if (e.target.tagName === 'A' || 
                    e.target.tagName === 'BUTTON' || 
                    e.target.closest('a') || 
                    e.target.closest('button')) {
                    return;
                }
                card.classList.toggle('flipped');
            });
            
            // Добавляем обработчики для кнопок на обратной стороне
            const links = card.querySelectorAll('.project-link');
            links.forEach(link => {
                link.addEventListener('click', (e) => {
                    if (link.getAttribute('href') === '#' || link.hasAttribute('disabled')) {
                        e.preventDefault();
                    }
                    e.stopPropagation();
                });
            });
        });
        
        // Закрытие карточки при клике вне ее
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.project-card')) {
                this.cards.forEach(card => {
                    card.classList.remove('flipped');
                });
            }
        });
        
        // Закрытие по Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.cards.forEach(card => {
                    card.classList.remove('flipped');
                });
            }
        });
    }
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    new ProjectsFlipCards();
});

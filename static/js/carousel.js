// 3D КАРУСЕЛЬ С ПЕРЕВОРАЧИВАЮЩИМИСЯ КАРТОЧКАМИ
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎪 Загрузка 3D карусели...');
    
    const carouselContainer = document.querySelector('.carousel-container');
    if (!carouselContainer) {
        console.log('❌ Карусель не найдена на странице');
        return;
    }
    
    const track = carouselContainer.querySelector('.carousel-track');
    const cards = carouselContainer.querySelectorAll('.card');
    const prevBtn = carouselContainer.querySelector('.carousel-btn.prev');
    const nextBtn = carouselContainer.querySelector('.carousel-btn.next');
    const indicators = carouselContainer.querySelectorAll('.indicator');
    
    let currentIndex = 0;
    let isAnimating = false;
    const cardWidth = 350;
    const totalCards = cards.length;
    let autoPlayInterval;
    
    function updateCarousel() {
        if (isAnimating) return;
        isAnimating = true;
        
        const offset = -currentIndex * cardWidth;
        track.style.transform = `translateX(${offset}px)`;
        
        // Обновляем индикаторы
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
        
        // Эффекты параллакса для карточек
        cards.forEach((card, index) => {
            const distance = Math.abs(index - currentIndex);
            const scale = 1 - (distance * 0.1);
            const opacity = 1 - (distance * 0.3);
            const zIndex = totalCards - distance;
            
            card.style.transform = `scale(${scale})`;
            card.style.opacity = opacity;
            card.style.zIndex = zIndex;
        });
        
        console.log(`🃏 Переход к карточке: ${currentIndex + 1}/${totalCards}`);
        
        setTimeout(() => {
            isAnimating = false;
        }, 600);
    }
    
    function nextCard() {
        if (isAnimating) return;
        currentIndex = (currentIndex + 1) % totalCards;
        updateCarousel();
    }
    
    function prevCard() {
        if (isAnimating) return;
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        updateCarousel();
    }
    
    function goToCard(index) {
        if (isAnimating || index === currentIndex) return;
        currentIndex = index;
        updateCarousel();
    }
    
    // Назначаем обработчики для кнопок
    if (prevBtn) {
        prevBtn.addEventListener('click', prevCard);
        console.log('✅ Кнопка "Назад" подключена');
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', nextCard);
        console.log('✅ Кнопка "Вперед" подключена');
    }
    
    // Назначаем обработчики для индикаторов
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => goToCard(index));
    });
    
    // Обработчики для переворота карточек при клике
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.closest('.carousel-btn') && !e.target.closest('.project-link')) {
                const cardInner = this.querySelector('.card-inner');
                cardInner.classList.toggle('flipped');
                
                if (navigator.vibrate) {
                    navigator.vibrate(50);
                }
            }
        });
    });
    
    // Автопрокрутка
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextCard, 5000);
    }
    
    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }
    
    // Пауза при наведении
    carouselContainer.addEventListener('mouseenter', stopAutoPlay);
    carouselContainer.addEventListener('mouseleave', startAutoPlay);
    
    // Поддержка свайпов
    let touchStartX = 0;
    let touchEndX = 0;
    
    carouselContainer.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoPlay();
    });
    
    carouselContainer.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        setTimeout(startAutoPlay, 3000);
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const difference = touchStartX - touchEndX;
        
        if (Math.abs(difference) > swipeThreshold) {
            if (difference > 0) {
                nextCard();
            } else {
                prevCard();
            }
        }
    }
    
    // Инициализация
    function initCarousel() {
        updateCarousel();
        startAutoPlay();
        
        console.log(`🎉 3D карусель инициализирована с ${totalCards} карточками`);
    }
    
    initCarousel();
    
    // Публичные методы
    window.carousel = {
        next: nextCard,
        prev: prevCard,
        goTo: goToCard,
        stop: stopAutoPlay,
        start: startAutoPlay
    };
});

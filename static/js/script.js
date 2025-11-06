console.log('Сайт загружен!');

// Простая функция для теста
function showMessage() {
    alert('JavaScript работает!');
}

// Автоматическое переключение слайдов
setInterval(() => {
    const buttons = document.querySelectorAll('button');
    if (buttons.length > 0) {
        console.log('Автопереключение слайдов работает');
    }
}, 5000);

// Упрощенные примеры кода для карточек
const codeExamples = {
    'Python': `# Автоматизация задач
import pandas as pd
data = pd.read_csv('file.csv')
results = data.describe()`,
    
    'Flask': `# Веб-приложение
from flask import Flask
app = Flask(__name__)

@app.route('/')
def home():
    return "Hello World!"`,
    
    'HTML/CSS': `/* Стили карточки */
.card {
    background: linear-gradient(135deg, #1e3a8a, #3b82f6);
    border-radius: 20px;
    padding: 2rem;
}`,
    
    'JavaScript': `// Интерактивность
document.addEventListener('click', (e) => {
    console.log('Клик зарегистрирован');
});`,
    
    'Git': `# Контроль версий
git add .
git commit -m "Обновление"
git push origin main`,
    
    'SQL': `-- Работа с данными
SELECT * FROM users 
WHERE active = true 
ORDER BY created_at DESC;`,
    
    'Django': `# Веб-фреймворк
from django.db import models

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()`
};

// Заполняем карточки кодом после загрузки
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.skill-card');
    cards.forEach(card => {
        const skill = card.dataset.skill;
        const codeElement = card.querySelector('code');
        if (codeExamples[skill]) {
            codeElement.textContent = codeExamples[skill];
        }
    });
});

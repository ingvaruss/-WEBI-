import os
import sys

# Добавляем путь к проекту
sys.path.insert(0, '/home/PRusya/mysite')

from app import app

def test_templates():
    with app.app_context():
        try:
            # Проверяем каждый шаблон
            templates = ['index.html', 'base.html', 'about.html', 'projects.html', 'contact.html']
            for template in templates:
                try:
                    app.jinja_env.get_template(template)
                    print(f"✅ {template} - доступен")
                except Exception as e:
                    print(f"❌ {template} - ошибка: {e}")
                    
            print(f"\nПуть к шаблонам: {app.template_folder}")
            print(f"Существует ли путь: {os.path.exists(app.template_folder)}")
            
        except Exception as e:
            print(f"Ошибка при тестировании: {e}")

if __name__ == '__main__':
    test_templates()

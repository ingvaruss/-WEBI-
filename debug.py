import sys
import os

print("=== ДИАГНОСТИКА PYTHONANYWHERE ===")
print(f"Python: {sys.version}")
print(f"Рабочая директория: {os.getcwd()}")
print(f"Python path: {sys.path}")

# Проверяем файлы
print("\n=== ФАЙЛЫ ===")
for root, dirs, files in os.walk('.'):
    level = root.count(os.sep)
    indent = ' ' * 2 * level
    print(f"{indent}{os.path.basename(root)}/")
    subindent = ' ' * 2 * (level + 1)
    for file in files:
        if file.endswith(('.py', '.html', '.css', '.txt')):
            print(f"{subindent}{file}")

# Проверяем Flask
try:
    from flask import Flask
    app = Flask(__name__)
    
    # Проверяем шаблоны
    template_path = os.path.join(os.getcwd(), 'templates')
    print(f"\n=== ШАБЛОНЫ ===")
    print(f"Путь к шаблонам: {template_path}")
    print(f"Существует: {os.path.exists(template_path)}")
    
    if os.path.exists(template_path):
        templates = os.listdir(template_path)
        print(f"Файлы в templates: {templates}")
        
except Exception as e:
    print(f"Ошибка: {e}")

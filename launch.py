import webbrowser
import os
import sys

def launch_site():
    html_file = "index.html"
    
    # Проверяем, существует ли файл
    if not os.path.exists(html_file):
        print(f"❌ Ошибка: Файл '{html_file}' не найден в текущей папке!")
        input("Нажмите Enter для выхода...")
        return

    # Получаем полный путь к файлу
    abs_path = os.path.abspath(html_file)
    
    print(f"☕ Запускаем 'Кофейный котик'...")
    # Открываем файл в браузере по умолчанию
    webbrowser.open(f"file://{abs_path}")
    print("✅ Сайт успешно открыт в браузере!")
    
    # Даем время на чтение сообщения перед закрытием консоли
    input("Нажмите Enter, чтобы закрыть это окно...")

if __name__ == "__main__":
    launch_site()

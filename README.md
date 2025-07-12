1. Установка Node.js и npm
 1. Скачай Node.js с официального сайта: https://nodejs.org/ (бери версию LTS, например, 20.x).
 2. Установи Node.js (просто нажимай "Next" в мастере установки).
 3. Проверь установку:
 Открой терминал в vscode, выполни
node -v  # Должна появиться версия Node.js (например, v20.11.1)
npm -v    # Должна появиться версия npm (например, 10.2.4)

2. Создание React-проекта
create-react-app - устаревший, поэтому используй Vite
 1. Перейди в папку, в которой БУДЕТ проект praktika, выполни
npm create vite@latest praktika --template react
Выбираем настройки:
Select a framework: React (выбираем стрелками)
Select a variant: JavaScript (выбираем стрелками)
 2. Переходим в папку проекта
cd praktika
 3. Устанавливаем зависимости
npm install
 4. Запускаем сервер разработки
npm run dev
 5. Приложение доступно здесь
http://localhost:5173

После создания папка praktika будет выглядеть так:
praktika/
├── node_modules/     # Библиотеки
├── public/           # Статика (favicon, изображения)
├── src/
│   ├── assets/       # Картинки, стили
│   ├── App.jsx       # Главный компонент
│   ├── main.jsx      # Входной файл
│   └── ...          
├── .gitignore        # Игнорируемые файлы
├── index.html        # Главная страница
├── package.json      # Зависимости и скрипты
└── vite.config.js    # Настройки Vite

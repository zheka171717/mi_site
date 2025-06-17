document.getElementById('submit-agreement').addEventListener('click', function() {
    const checkbox = document.getElementById('agree-checkbox');
    const errorElement = document.getElementById('agreement-error');
    
    if (!checkbox.checked) {
        errorElement.textContent = 'Необходимо согласиться с условиями';
    } else {
        errorElement.textContent = '';
        // Здесь можно добавить код для отправки формы
        console.log('Форма отправлена');
    }
});

// Убираем сообщение об ошибке при изменении чекбокса
document.getElementById('agree-checkbox').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('agreement-error').textContent = '';
    }
});

// 1. Получаем кнопку из HTML
const myButton = document.getElementById("myButton");

// 2. Выводим сообщение о загрузке страницы
console.log("страница загрузилась");

// 3. Добавляем обработчик onclick
console.log(myButton)
myButton.onclick = function() {
    console.log("событие onclick");
};

// 4. Добавляем обработчик addEventListener
myButton.addEventListener("click", function() {
    console.log("событие addEventListener");
});

// Обработчик клика для кнопок 1, 2, 3 (вывод в консоль)
document.querySelectorAll('.number-button').forEach(button => {
    button.addEventListener('click', () => {
        console.log(`Нажата кнопка: ${button.textContent}`);
    });
});

// Кнопка 4: счетчик нажатий
let clickCount = 0;
document.getElementById('countButton').addEventListener('click', () => {
    clickCount++;
    console.log(`Кнопка "4" была нажата ${clickCount} раз(а)`);
});

// Кнопка 5: изменение текста после клика
document.getElementById('textChangeButton').addEventListener('click', function() {
    this.textContent = 'Вы нажали на эту кнопку';
});

// 1. Кнопка для добавления заголовка
document.getElementById('addTitleButton').addEventListener('click', () => {
    const title = document.createElement('h1');
    title.textContent = 'Новый заголовок';
    title.id = 'dynamicTitle';
    document.getElementById('buttons').appendChild(title);
});

// 2. Кнопка для удаления заголовка
document.getElementById('removeTitleButton').addEventListener('click', () => {
    const title = document.getElementById('dynamicTitle');
    if (title) {
        title.remove();
    }
});

// 3. Кнопка, реагирующая на наведение и уход курсора
const hoverButton = document.getElementById('hoverButton');
hoverButton.addEventListener('mouseover', () => {
    console.log('Вы навели на данную кнопку');
});
hoverButton.addEventListener('mouseout', () => {
    console.log('Наведение на кнопку больше нет');
});

// 1. Кнопка для добавления нового элемента списка
document.getElementById('addItemButton').addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = 'Новый элемент списка';
    document.getElementById('itemList').appendChild(newItem);
});

// 2. Кнопка для удаления первого элемента списка
document.getElementById('removeFirstItemButton').addEventListener('click', () => {
    const itemList = document.getElementById('itemList');
    if (itemList.firstElementChild) {
        itemList.firstElementChild.remove();
    }
});

// 3. Кнопка, которая получает класс "click" при клике
document.getElementById('clickClassButton').addEventListener('click', function() {
    this.classList.add('click');
});

// 1. Найти div с классом "content"
const contentDiv = document.querySelector('.content');

if (contentDiv) {
    // 2. Создать новый элемент кнопки
    const button = document.createElement('button');

    // 3. Добавить текст "Отправить"
    button.textContent = 'Отправить';

    // 4. Добавить обработчик события для изменения текста после клика
    button.addEventListener('click', () => {
        button.textContent = 'Текст отправлен';
    });

    // 5. Добавить кнопку внутрь div
    contentDiv.appendChild(button);
} else {
    console.error('Элемент с классом "content" не найден!');
}

// 1. Вывод сообщения, когда все теги DOM загружены
document.addEventListener('DOMContentLoaded', () => {
    console.log('Все теги прогрузились');
});

// 2. Вывод сообщения, когда все ресурсы страницы загружены
window.addEventListener('load', () => {
    console.log('Страница загрузилась');
});

// 3. Делегирование: Определение наличия класса "super_element" и вывод тега
document.body.addEventListener('click', (event) => {
    const element = event.target;
    const tagName = element.tagName.toLowerCase();
    if (element.classList.contains('super_element')) {
        console.log(`Класс "super_element" присутствует в элементе "${tagName}".`);
    } else {
        console.log(`Класс "super_element" отсутствует в элементе "${tagName}".`);
    }
});

// 4. Сообщение при наведении на textarea
document.addEventListener('mouseover', (event) => {
    if (event.target.tagName.toLowerCase() === 'textarea') {
        console.log('Вы навели на textarea.');
    }
});

// 5. Делегирование: Вывод текста кнопки при клике внутри ul
document.querySelector('ul').addEventListener('click', (event) => {
    if (event.target.tagName.toLowerCase() === 'button') {
        console.log(event.target.textContent);
    }
});

// 6. Ответ на вопрос:
console.log('Когда клик происходит внутри ul, сначала срабатывает обработчик клика на кнопке внутри ul, затем всплытие событий достигает обработчика клика на всем документе, определяющего наличие класса "super_element". Из-за этого сообщение из 5-го задания появляется первым, затем 3-е задание.')

// 7. Изменение цвета заднего фона каждого второго li
document.querySelectorAll('li:nth-child(even)').forEach(li => {
    li.style.backgroundColor = 'lightgray';
});

// Обработчик для кнопки отправки напитка
document.getElementById('submit-drink').addEventListener('click', () => {
    const selectedDrink = document.querySelector('input[name="drink"]:checked');
    
    if (!selectedDrink) {
        console.log('Пожалуйста, выберите напиток');
        return;
    }
    
    if (selectedDrink.value === 'tea') {
        console.log('Чай закончился');
    } else if (selectedDrink.value === 'coffee') {
        console.log('Кофе закончился');
    }
});

// Проверка пароля
document.getElementById('check-password').addEventListener('click', () => {
    const passwordInput = document.getElementById('password-input');
    const messageElement = document.getElementById('password-message');
    
    // Удаляем предыдущие классы
    passwordInput.classList.remove('correct', 'incorrect');
    messageElement.textContent = '';
    
    if (passwordInput.value.toLowerCase() === 'пароль') {
        passwordInput.classList.add('correct');
    } else {
        passwordInput.classList.add('incorrect');
        messageElement.textContent = 'Пароль неверный';
    }
});
document.getElementById('password-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('check-password').click();
    }
});
// Динамическое изменение заголовка
document.getElementById('title-input').addEventListener('input', function() {
    const heading = document.getElementById('dynamic-heading');
    heading.textContent = this.value || 'Заголовок'; // Если поле пустое, вернется "Заголовок"
});
// Часть 1: Отображение значения input в span
document.getElementById('from').addEventListener('input', function() {
    document.getElementById('output').textContent = this.value;
});

// Часть 2: Анимация по клику
document.querySelector('.messageBtn').addEventListener('click', function() {
    const message = document.querySelector('.message');
    message.classList.add('animate_animated', 'animate_fadeInLeftBig');
    message.style.visibility = 'visible';
});

// Часть 3: Валидация формы
const form = document.getElementById('validationForm');
const inputs = form.querySelectorAll('input');

// Проверка при отправке формы
form.addEventListener('submit', function(e) {
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        }
    });
    
    if (!isValid) {
        e.preventDefault();
    }
});

// Проверка при вводе
inputs.forEach(input => {
    input.addEventListener('input', function() {
        if (this.value.trim()) {
            this.classList.remove('error');
        } else {
            this.classList.add('error');
        }
    });
});

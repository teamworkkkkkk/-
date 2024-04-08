document.addEventListener('DOMContentLoaded', function() {
    var chatWindow = document.getElementById('chat-window');
    var messageInput = document.getElementById('message-input');
    var sendButton = document.getElementById('send-button');

    // Функція для додавання повідомлення до чату
    function addMessage(message) {
        var messageElement = document.createElement('div');
        messageElement.textContent = message;
        chatWindow.appendChild(messageElement);
        // Автоматичне прокручування чату вниз
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    // Обробник події для натискання кнопки "Відправити"
    sendButton.addEventListener('click', function() {
        var message = messageInput.value.trim(); // Отримуємо введене повідомлення
        if (message !== '') { // Перевіряємо, чи повідомлення не пусте
            addMessage('Ви: ' + message); // Додаємо повідомлення до чату
            messageInput.value = ''; // Очищаємо поле вводу
        }
    });

    // Симуляція отримання повідомлень від іншого користувача (для демонстрації)
    setTimeout(function() {
        addMessage('Оператор: Привіт! Як я можу вам допомогти?');
    }, 1000);
    setTimeout(function() {
        addMessage('Оператор: Чи є у вас які-небудь питання щодо наших товарів?');
    }, 3000);

    // Тепер налаштуємо обробник подій для відправлення повідомлення за допомогою клавіші "Enter" у полі вводу повідомлення.
    messageInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendButton.click(); // Клацнемо кнопку "Відправити", якщо користувач натисне "Enter"
        }
    });
});

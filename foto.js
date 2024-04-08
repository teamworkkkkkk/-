document.addEventListener('DOMContentLoaded', function() {
    var currentSlide = 0; // Змінна для відстеження поточного слайда
    var slides = document.querySelectorAll('.slide'); // Вибираємо всі слайди
    var totalSlides = slides.length; // Кількість слайдів

    function showSlide(index) {
        // Перемикаємо видимість слайдів відповідно до індексу
        for (var i = 0; i < totalSlides; i++) {
            if (i === index) {
                slides[i].style.display = 'block';
            } else {
                slides[i].style.display = 'none';
            }
        }
    }

    function nextSlide() {
        currentSlide++; // Збільшуємо індекс поточного слайда
        if (currentSlide >= totalSlides) {
            currentSlide = 0; // Повертаємося до першого слайда, якщо досягнуто останнього
        }
        showSlide(currentSlide); // Відображаємо новий слайд
    }

    function prevSlide() {
        currentSlide--; // Зменшуємо індекс поточного слайда
        if (currentSlide < 0) {
            currentSlide = totalSlides - 1; // Переходимо до останнього слайда, якщо досягнуто першого
        }
        showSlide(currentSlide); // Відображаємо новий слайд
    }

    // Викликаємо функцію відображення початкового слайда
    showSlide(currentSlide);

    // Налаштовуємо обробники подій для кнопок "Назад" та "Вперед"
    document.querySelector('.prev').addEventListener('click', prevSlide);
    document.querySelector('.next').addEventListener('click', nextSlide);
});

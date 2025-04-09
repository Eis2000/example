// Генератор случайных чисел
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Примеры использования генератора случайных чисел
console.log(getRandomNumber(1, 10));  // Результат: случайное число от 1 до 10
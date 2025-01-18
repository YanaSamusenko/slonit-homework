// Создайте программу, где два компьютера играют друг с другом в угадывание числа:
// Первый компьютер загадывает случайное число от 1 до 100.
// Второй компьютер пытается угадать число.
// Для угадывания второй компьютер использует стратегию бинарного поиска: 
// он начинает с середины возможного диапазона и уточняет диапазон в зависимости от подсказок 





function computerGuessGame() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    console.log('Компьютер 1 загадал число: ' + secretNumber);

    let min = 1;
    let max = 100;
    let guess;
    let attempts = 0;

    while (min <= max) {
        attempts++;
        guess = Math.floor((min + max) / 2);
        console.log(`Компьютер 2: Пробую число ${guess}.`);

        if (guess === secretNumber) {
            console.log(`Компьютер 1: Угадал!`);
            break;
        } else if (guess < secretNumber) {
            console.log(`Компьютер 1: Больше.`);
            min = guess + 1;
        } else {
            console.log(`Компьютер 1: Меньше.`);
            max = guess - 1;
        }

        console.log(`Текущий диапазон: ${min} - ${max}\n`);
    }

    console.log(`Компьютер 2 угадал число ${secretNumber} за ${attempts} попыток.`);
}

secretNumberGame();



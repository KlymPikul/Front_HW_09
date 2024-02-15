// Калькулятор стоимости товаров
function calculateTotalPrice(price, quantity) {
    return price * quantity;
}

const totalPrice = calculateTotalPrice(10, 5);
console.log(totalPrice);



// Проверка на четность
function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(3)); 
console.log(isEven(8)); 

// Реверс строки
function reverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

console.log(reverseString("football"));



// Конвертер температуры
function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

console.log(celsiusToFahrenheit(10));


// Об'єкт "автомобіль"

// Створення об'єкта
const car = {
  марка: "Toyota",
  модель: "Camry",
  рікВипуску: 2018
};

console.log("Початковий об'єкт:");
console.log(car);

// "рік випуску"
car.рікВипуску = 2023;

console.log("\nПісля зміни року випуску:");
console.log(car);

// Перебір всіх властивостей об'єкта
console.log("\nВсі властивості автомобіля:");
for (let key in car) {
  console.log(key + ": " + car[key]);
}

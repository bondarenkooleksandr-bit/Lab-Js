// Об'єкт "Користувач" з методами увійти() та вийти()

// Функція-конструктор
function User(name, email) {
  this.name = name;
  this.email = email;
  this.isLoggedIn = false;
}

// Додавання методів через прототип
User.prototype.увійти = function() {
  this.isLoggedIn = true;
  console.log(this.name + " увійшов у систему.");
};

User.prototype.вийти = function() {
  this.isLoggedIn = false;
  console.log(this.name + " вийшов із системи.");
};

// Створення екземплярів
const user1 = new User("Олег", "oleg@gmail.com");
const user2 = new User("Марія", "maria@gmail.com");

// Виклик методів
user1.увійти();
console.log("Статус Олега:", user1.isLoggedIn);

user1.вийти();
console.log("Статус Олега:", user1.isLoggedIn);

user2.увійти();
console.log("Статус Марії:", user2.isLoggedIn);

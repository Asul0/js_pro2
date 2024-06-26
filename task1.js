// Задание 1: Управление библиотекой книг
class Book {
    constructor(title, author, pages) {
      this.title = title;
      this.author = author;
      this.pages = pages;
    }
  
    displayInfo() {
      console.log(`Title: ${this.title}`);
      console.log(`Author: ${this.author}`);
      console.log(`Pages: ${this.pages}`);
    }
  }
  
  // Задание 2: Управление списком студентов
  class Student {
    constructor(name, age, grade) {
      this.name = name;
      this.age = age;
      this.grade = grade;
    }
  
    displayInfo() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Grade: ${this.grade}`);
    }
  }
  
  // Пример использования класса Book
  const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180);
  book1.displayInfo();
  
  // Пример использования класса Student
  const student1 = new Student("John Smith", 16, "10th grade");
  student1.displayInfo();
  
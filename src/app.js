import '../src/css/style.css';
import ToDoList, { toDoList } from './js/todolist';
import ItemToDo from './js/item';

class App {
   static sayHello() {
      console.log('Hello!');
   }
}

// Вызов статического метода класса
App.sayHello();

window.ItemToDo = ItemToDo;
window.ToDoList = ToDoList;
window.toDoList = toDoList;
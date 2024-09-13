import ItemToDo, { Category } from "./entities.js";

export default class ToDoList {
   #itemsList = [];
   #itemsCounter = 0;

   getItemsList() {
      return this.#itemsList;
   }

   getItemsCounter() {
      this.#itemsCounter++;
      return this.#itemsCounter;
   }

   createItem(id, title, description, dueDate, priority, status) {
      let item = new ItemToDo(id, title, description, dueDate, priority, status);
      return item;
   }

   addItemToList(itemToDo) {
      this.#itemsList.push(itemToDo);
      this.getItemsList();
   }

}

const category1 = new Category(1, 'Personal');
const category2 = new Category(2, 'Family');
const category3 = new Category(3, 'Work');

export const categories = [category1, category2, category3];

const toDoListLibrary = new ToDoList();


//toDoListLibrary.createItem(1, 'New Task', 'Description of the task', 'pending', true);

//console.log(item);


toDoListLibrary.addItemToList(toDoListLibrary.createItem(toDoListLibrary.getItemsCounter(), 'New Task', 'Description of the task', 'pending', true));



export { toDoListLibrary };
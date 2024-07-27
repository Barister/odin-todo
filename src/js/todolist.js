import ItemToDo from "./item";

export default class ToDoList {
   #itemsList = [];
   #itemsCounter = 1;

   getItemsList() {
      return this.#itemsList;
   }

   getItemsCounter() {
      return this.#itemsCounter;
   }

   addItemToList(itemToDo) {
      this.#itemsList.push(itemToDo);
      this.getItemsList();
   }

}

const toDoList = new ToDoList();


const item = new ItemToDo(1, 'New Task', 'Description of the task', 'pending');

console.log(item);


toDoList.addItemToList(item);

toDoList.getItemsList();

export { toDoList };
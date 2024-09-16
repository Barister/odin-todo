import ToDoList, { toDoListLibrary } from './library.js';
import ItemToDo from './entities.js';

export default class DataController {

   static getDataFromLibrary() {
      DataController.getDataFromLs();

      let data = toDoListLibrary.getItemsList();

      console.log('todo library:', data);

      return data;
   }

   static getDataFromLs() {
      console.log('Данные получены из локального хранилища');

   }
}
import ToDoList, { toDoListLibrary } from './library.js';
import ItemToDo from './entities.js';

export default class DataController {

   static getDataFromLibrary() {
      DataController.getDataFromLs();

      console.log('todo library:', toDoListLibrary.getItemsList());
   }

   static getDataFromLs() {
      console.log('Данные получены из локального хранилища');

   }
}
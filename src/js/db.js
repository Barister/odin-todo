import ToDoList, { toDoListLibrary, categories, projectsLibrary } from './library.js';
import ItemToDo from './entities.js';

export default class DbController {

   static getDataFromLs() {
      const data = JSON.parse(localStorage.getItem('toDoList'));
      return data ? data : { items: [] };
   }

   static saveDataToLs(data) {
      localStorage.setItem('toDoList', JSON.stringify(data));
   }


}
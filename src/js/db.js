import ToDoList, { toDoListLibrary, categories, projectsLibrary } from './library.js';
import ItemToDo from './entities.js';

export default class DataController {

   static getDataFromLibrary() {
      this.getDataFromLs();

      let data = {};

      data.items = toDoListLibrary.getItemsList();
      data.categories = categories;
      data.projects = projectsLibrary.getProjectsList();

      console.log('data from library.js:', data);

      return data;
   }

   static sendDataToLs(action, entity, element) {
      let dataFromLibrary = this.getDataFromLibrary();

      if (action == 'remove') {
         toDoListLibrary.removeItemFromList(element);
      }


      console.log('ОТправляем новые данные в локальное хранилище!');

   }

   static getDataFromLs() {
      console.log('Данные получены из локального хранилища');

   }
}
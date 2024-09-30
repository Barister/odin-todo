import ItemToDo, { Category, Project } from "./entities.js";
import DbController from "./db.js";

export default class ToDoList {
   #itemsList = [];
   #itemsCounter = 0;

   getDataFromDb() {
      const data = DbController.getDataFromLs() || { items: [] };
      this.#itemsList = data.items;  // Загружаем данные в #itemsList
      console.log('Loaded items from DB:', this.#itemsList);
   }

   getItemsList() {
      console.log('toDoList:', this.#itemsList);
      return this.#itemsList;
   }

   getItemsCounter() {
      this.#itemsCounter++;
      return this.#itemsCounter;
   }

   createItem(
      id = this.getItemsCounter(),
      title = 'Title',
      description = 'Place your description here',
      dueDate,
      category = category0,
      project = 0,
      priority = false,
      status = true
   ) {
      let item = new ItemToDo(id, title, description, dueDate, category, project, priority, status);
      return item;
   }

   removeItemFromList(id) {
      let currentList = this.getItemsList();

      console.log('currentList:', currentList);

      let processedList = currentList.filter(item => item.id != id);

      console.log('processedList:', processedList);

      this.updateList(processedList);

      this.sendDatatoDb();

   }

   addItemToList(itemToDo) {
      this.#itemsList.push(itemToDo);
      this.getItemsList();
      this.sendDatatoDb();
   }

   updateList(processedList) {
      this.#itemsList = processedList;

      console.log('список обновлен:', processedList);
   }

   sendDatatoDb() {
      DbController.saveDataToLs({ items: this.#itemsList });
   }

}

const category0 = new Category(0, 'None', '');
const category1 = new Category(1, 'Personal', 'category--personal');
const category2 = new Category(2, 'Family', 'category--family');
const category3 = new Category(3, 'Work', 'category--work');

export const categories = [category0, category1, category2, category3];

export class ProjectsList {
   #projectsList = [];
   #projectsCounter = 0;

   getProjectsList() {
      console.log('Projects:', this.#projectsList);
      return this.#projectsList;
   }

   getProjectsCounter() {
      this.#projectsCounter++;
      return this.#projectsCounter;
   }

   createProject(id, title, description, category, status) {
      let project = new Project(id, title, description, category, status);
      return project;
   }

   addProjectToList(project) {
      this.#projectsList.push(project);
      this.getProjectsList();
   }
};

const toDoListLibrary = new ToDoList();
const projectsLibrary = new ProjectsList();

toDoListLibrary.getDataFromDb();

if (toDoListLibrary.getItemsList().length === 0) {
   toDoListLibrary.addItemToList(toDoListLibrary.createItem(toDoListLibrary.getItemsCounter(), 'To finish all todos page', 'Description of the task', 'pending', category1, 2, true, true));

   toDoListLibrary.addItemToList(toDoListLibrary.createItem(toDoListLibrary.getItemsCounter(), 'Go to the park', 'Description of the task', 'pending', category2, 3, false, true));

   projectsLibrary.addProjectToList(projectsLibrary.createProject(projectsLibrary.getProjectsCounter(), '', '', null, true));

   projectsLibrary.addProjectToList(projectsLibrary.createProject(projectsLibrary.getProjectsCounter(), 'The Odin Project', '', 1, true));

   projectsLibrary.addProjectToList(projectsLibrary.createProject(projectsLibrary.getProjectsCounter(), 'Family journey', '', 2, true));
}




export { toDoListLibrary, projectsLibrary };
import ItemToDo, { Category, Project } from "./entities.js";

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

export class ProjectsList {
   #projectsList = [];
   #projectsCounter = 0;

   getProjectsList() {
      return this.#projectsList;
   }

   getProjectsCounter() {
      this.#projectsCounter++;
      return this.#projectsCounter;
   }

   createProject(id, title, description, status) {
      let project = new Project(id, title, description, status);
      return project;
   }

   addProjectToList(project) {
      this.#projectsList.push(project);
      this.getProjectsList();
   }
};

const toDoListLibrary = new ToDoList();
const projectsLibrary = new ProjectsList();


//toDoListLibrary.createItem(1, 'New Task', 'Description of the task', 'pending', true);

//console.log(item);


toDoListLibrary.addItemToList(toDoListLibrary.createItem(toDoListLibrary.getItemsCounter(), 'To finish all todos page', 'Description of the task', 'pending', 0, 0, true));

projectsLibrary.addProjectToList(projectsLibrary.createProject(projectsLibrary.getProjectsCounter(), '', '', 0, true));



export { toDoListLibrary };
import allTodos from "./allToDosController";
import { toDoListLibrary, ProjectsList, projectsLibrary } from "./library";
import App from '../app';
import DbController from "./db";

export default class ScreenContoller {

   static cacheDom() {
      this.wrapper = document.querySelector('.wrapper');
      this.pageHeader = document.querySelector('.header');
      this.pageContainer = document.querySelector('.page__container');
      this.sidePanel = document.querySelector('.sidepanel');
      this.sidePanelProjects = document.querySelector('.sidepanel__projects');
      this.headerBurger = document.querySelector('.header__burger');
      this.widgetButton = document.querySelector('.widget__button');
   }

   static onDomContentLoaded() {
      this.cacheDom();
      this.renderDataOnScreen();
      this.handleEvents();
   }

   static handleEvents() {
      this.headerBurger.addEventListener('click', (event) => this.sidePanelToggle(event));


   }

   static sidePanelToggle(event) {
      this.headerBurger.classList.toggle('header__burger--active');
      this.sidePanel.classList.toggle('sidepanel--active');
      this.wrapper.classList.toggle('wrapper--sidepanel-active');
   }

   static renderDataOnScreen() {

      let itemsFromLibrary = toDoListLibrary.getItemsList();
      let projectsFromLibrary = projectsLibrary.getProjectsList();

      console.log('items из library?:', itemsFromLibrary);

      this.renderProjectsToSidepanel(projectsFromLibrary);

      allTodos.renderPage(this.pageContainer, [itemsFromLibrary, projectsFromLibrary]);
   }

   static clearProjectsToSidepanel() {
      this.sidePanelProjects.innerHTML = '';
   }

   static renderProjectsToSidepanel(projects) {

      this.clearProjectsToSidepanel();

      projects.forEach(element => {
         if (element.id !== 1) {
            const projectItem = document.createElement('li');
            projectItem.classList.add('sidepanel__item');

            const projectAnchor = document.createElement('a');
            projectAnchor.textContent = `# ${element.title}`;
            projectAnchor.href = '';

            projectItem.appendChild(projectAnchor);

            this.sidePanelProjects.appendChild(projectItem);
         }
      });
   }

   static sendChangesToLibrary(action, entity, data) {
      if (action == 'remove' && entity == 'todo') {
         this.handleDeleteTodo(data);
      } else if (action == 'createNewItem' && entity == 'todo') {
         this.handleCreateTodo();
      }
      this.renderDataOnScreen();
   }

   static handleDeleteTodo(id) {
      toDoListLibrary.removeItemFromList(id);
   }

   static handleCreateTodo() {
      let newTodo = toDoListLibrary.createItem();
      toDoListLibrary.addItemToList(newTodo);
   }
}


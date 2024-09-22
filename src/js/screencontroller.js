import allTodos from "./allToDosController";
import { ProjectsList } from "./library";

export default class ScreenContoller {

   static cacheDom() {
      this.wrapper = document.querySelector('.wrapper');
      this.pageHeader = document.querySelector('.header');
      this.pageContainer = document.querySelector('.page__container');
      this.sidePanel = document.querySelector('.sidepanel');
      this.sidePanelProjects = document.querySelector('.sidepanel__projects');
      this.headerBurger = document.querySelector('.header__burger');

   }

   static onDomContentLoaded() {
      this.cacheDom();
      ScreenContoller.handleEvents();
   }

   static handleEvents() {
      this.headerBurger.addEventListener('click', (event) => this.sidePanelToggle(event));

   }

   static sidePanelToggle(event) {
      this.headerBurger.classList.toggle('header__burger--active');
      this.sidePanel.classList.toggle('sidepanel--active');
      this.wrapper.classList.toggle('wrapper--sidepanel-active');
   }

   static renderDataOnScreen(dataFromDb) {
      console.log('dataFromDb:', dataFromDb);

      this.renderProjectsToSidepanel(dataFromDb.projects);

      allTodos.renderPage(this.pageContainer, dataFromDb);
   }

   static renderProjectsToSidepanel(projects) {

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
}


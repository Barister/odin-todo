import allToDosLoad from "./alltodosView";

export default class ScreenContoller {

   static cacheDom() {
      this.wrapper = document.querySelector('.wrapper');
      this.pageHeader = document.querySelector('.header');
      this.pageContainer = document.querySelector('.page__container');
      this.sidePanel = document.querySelector('.sidepanel');
      this.headerPanel = document.querySelector('.header__panel');
   }

   static onDomContentLoaded() {
      this.cacheDom();
      ScreenContoller.handleEvents();
      // allToDosLoad();
   }

   static handleEvents() {
      this.headerPanel.addEventListener('click', () => {
         this.sidePanel.classList.toggle('sidepanel--active');
         this.wrapper.classList.toggle('wrapper--sidepanel-active');
      });
   }

   static renderDataOnScreen(dataFromDb) {
      console.log('dataFromDb:', dataFromDb);
      console.log('element до вызова allToDosLoad:', this.pageContainer);
      allToDosLoad(this.pageContainer, dataFromDb);
   }

}
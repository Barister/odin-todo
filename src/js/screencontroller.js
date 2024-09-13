import allToDosLoad from "./alltodosView";

export default class ScreenContoller {

   static cacheDom() {
      pageHeader = document.querySelector('.header');
      pageContainer = document.querySelector('.page__container');
      sidePanel = document.querySelector('.sidepanel');
   }

   static onDomContentLoaded() {
      allToDosLoad();
   }



}
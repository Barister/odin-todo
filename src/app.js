import '../src/css/style.css';
import ScreenContoller from './js/screenController.js';
import DataController from './js/db.js'

export default class App {

   static init() {
      console.log("App запущен");
      document.addEventListener("DOMContentLoaded", App.onDomContentLoaded);


   }

   static onDomContentLoaded() {
      // console.log("Dom загружен");
      ScreenContoller.onDomContentLoaded();
      App.sendDataToScreen();
   }

   static getDataFromDb() {
      // console.log('Данные получены:', DataController.getDataFromLibrary());
      const dataFromDb = DataController.getDataFromLibrary();
      return dataFromDb
   }

   static sendDataToScreen() {
      ScreenContoller.renderDataOnScreen(App.getDataFromDb());
   }


   static updateDb(action, entity, element) {
      DataController.sendDataToLs(action, entity, element);
      // this.getDataFromDb();
      if (action != 'remove') {
         App.sendDataToScreen();
      }

   }


}

// Вызов статического метода класса
App.init();

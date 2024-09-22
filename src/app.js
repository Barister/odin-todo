import '../src/css/style.css';
import ScreenContoller from './js/screenController.js';
import DataController from './js/db.js'

class App {

   static init() {
      console.log("App запущен");
      document.addEventListener("DOMContentLoaded", App.onDomContentLoaded);


   }

   static onDomContentLoaded() {
      console.log("Dom загружен");
      ScreenContoller.onDomContentLoaded();
      App.getDataFromDb();
   }

   static getDataFromDb() {
      console.log('Данные получены:', DataController.getDataFromLibrary());
      const dataFromDb = DataController.getDataFromLibrary();

      ScreenContoller.renderDataOnScreen(dataFromDb);
   }


}

// Вызов статического метода класса
App.init();

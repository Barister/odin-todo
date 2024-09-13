import '../src/css/style.css';
import ScreenContoller from './js/screencontroller.js';
import DataController from './js/db.js'

class App {

   static init() {
      console.log("App запущен");
      document.addEventListener("DOMContentLoaded", App.onDomContentLoaded);


   }

   static onDomContentLoaded() {
      console.log("Dom загружен");
      App.getDataFromDb();
      ScreenContoller.onDomContentLoaded();
   }

   static getDataFromDb() {
      // console.log('Данные получены');
      DataController.getDataFromLibrary();

   }


}

// Вызов статического метода класса
App.init();

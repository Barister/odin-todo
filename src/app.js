import '../src/css/style.css';
import ScreenContoller from './js/screenController.js';


export default class App {

   static init() {
      console.log("App запущен");
      document.addEventListener("DOMContentLoaded", App.onDomContentLoaded);
   }

   static onDomContentLoaded() {

      ScreenContoller.onDomContentLoaded();

   }

}


App.init();

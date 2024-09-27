function componentFactory() {

   function createButton(classes, text) {
      const button = document.createElement('button');
      button.classList.add(...classes);
      button.textContent = text;
      return button;
   }

   return { createButton };

}

const components = componentFactory();
export default components;
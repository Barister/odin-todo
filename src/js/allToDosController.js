import ScreenContoller from "./screenController";
import { createPopup } from "./popup";
import components from "./componentFactory";

function allToDosController() {

   const renderPage = function (elementDOM, [items, projects]) {

      deleteOldInner();


      const pageInner = createPageInner();
      const pageList = createPageList(items, projects);

      console.log("items, projects:", items, projects);

      pageInner.appendChild(pageList);
      elementDOM.appendChild(pageInner);

      attachEventListeners();
   };

   function deleteOldInner() {
      let pageOldInner = document.querySelector('.page__inner');
      if (pageOldInner) { pageOldInner.remove() };
   }

   function createPageInner() {
      const pageInner = document.createElement('div');
      pageInner.classList.add('page__inner');
      return pageInner;
   }

   function createPageList(items, projects) {
      const pageList = document.createElement('ul');
      pageList.classList.add('page__list');



      items.forEach(item => {
         const todoItem = createTodoItem(item, projects);
         pageList.appendChild(todoItem);
      });

      return pageList;
   }

   function createTodoItem(item, projects) {
      const todoItem = document.createElement('li');
      todoItem.classList.add('page__todo-item', 'todo-item');
      todoItem.setAttribute('id', item.id);


      todoItem.append(createDoneDiv(), createTitleTextArea(item.title), createImportanceDiv(item.priority), createPanel(item, projects));

      return todoItem;
   }

   function createDoneDiv() {
      const doneDiv = document.createElement('div');
      doneDiv.classList.add('todo-item__done');
      return doneDiv;
   }

   function createTitleTextArea(title) {
      const titleTextArea = document.createElement('textarea');
      titleTextArea.classList.add('todo-item__title');
      titleTextArea.textContent = title;
      return titleTextArea;
   }

   function createImportanceDiv(priority) {
      const importanceDiv = document.createElement('div');
      importanceDiv.classList.add('todo-item__importance');

      const importanceIcon = document.createElement('i');
      importanceIcon.classList.add('fas', 'fa-exclamation');
      if (priority) importanceIcon.classList.add('fa-exclamation--important');

      importanceDiv.appendChild(importanceIcon);
      return importanceDiv;
   }

   function createPanel(item, projects) {
      const panelDiv = document.createElement('div');
      panelDiv.classList.add('todo-item__panel');

      panelDiv.append(createCalendarDiv(), createCategoryDiv(item), createProjectSelect(item, projects), createBlanketDiv(), createDeleteDiv());

      return panelDiv;
   }

   function createCalendarDiv() {
      const calendarDiv = document.createElement('div');
      calendarDiv.classList.add('todo-item__calendar');

      const calendarIcon = document.createElement('i');
      calendarIcon.classList.add('far', 'fa-calendar-alt');

      calendarDiv.appendChild(calendarIcon);
      return calendarDiv;
   }

   function createCategoryDiv(item) {
      const categoryDiv = document.createElement('div');
      categoryDiv.classList.add('todo-item__category', `todo-item__${item.category.style}`);
      return categoryDiv;
   }

   function createProjectSelect(item, projects) {
      const projectDiv = document.createElement('div');
      projectDiv.classList.add('todo-item__project');

      const projectSelect = document.createElement('select');
      projects.forEach(project => {
         const option = document.createElement('option');
         if (item.project === project.id) option.selected = true;
         option.textContent = project.title;
         projectSelect.append(option);
      });

      projectDiv.appendChild(projectSelect);
      return projectDiv;
   }

   function createBlanketDiv() {
      const blanketDiv = document.createElement('div');
      blanketDiv.classList.add('todo-item__blanket');
      return blanketDiv;
   }

   function createDeleteDiv() {
      const deleteDiv = document.createElement('div');
      deleteDiv.classList.add('todo-item__delete');

      const deleteIcon = document.createElement('i');
      deleteIcon.classList.add('far', 'fa-trash-alt');
      deleteDiv.appendChild(deleteIcon);

      return deleteDiv;
   }

   function attachEventListeners() {
      const todoItems = document.querySelectorAll('.page__todo-item');
      todoItems.forEach(item => {
         item.addEventListener('click', handleItemClick);
      });

      const newElementButton = ScreenContoller.widgetButton;
      newElementButton.addEventListener('click', addNewCard);
   }

   function handleItemClick(event) {
      const targetItem = event.currentTarget;

      if (event.target.classList.contains('fa-trash-alt')) {
         verifyDeleteTodoCard(targetItem);
         return;
      }

      collapseAllCards();
      expandCard(targetItem);
   }

   function collapseAllCards() {
      const allItems = document.querySelectorAll('.page__todo-item');
      allItems.forEach(item => collapseCard(item));
   }

   function expandCard(item) {
      item.classList.add('page__todo-item--active');
      const titleElement = item.querySelector('.todo-item__title');

      const description = document.createElement('textarea');
      description.classList.add('todo-item__description');
      description.textContent = 'Description of the item';
      titleElement.insertAdjacentElement('afterend', description);

      const saveDiv = document.createElement('div');
      saveDiv.className = 'todo-item__save';
      const saveButton = document.createElement('button');
      saveButton.classList.add('btn');
      saveButton.textContent = 'SAVE';
      saveDiv.appendChild(saveButton);

      const blanket = item.querySelector('.todo-item__blanket');
      if (blanket) blanket.remove();

      const deleteDiv = item.querySelector('.todo-item__delete');
      deleteDiv.insertAdjacentElement('beforebegin', saveDiv);
   }

   function collapseCard(item) {
      item.classList.remove('page__todo-item--active');
      const description = item.querySelector('.todo-item__description');
      if (description) description.remove();

      const saveDiv = item.querySelector('.todo-item__save');
      if (saveDiv) saveDiv.remove();

      const deleteDiv = item.querySelector('.todo-item__delete');
      if (!item.querySelector('.todo-item__blanket')) {
         const blanketDiv = createBlanketDiv();
         deleteDiv.insertAdjacentElement('beforebegin', blanketDiv);
      }
   }

   const addNewCard = () => {
      console.log('добавить карточку');

      ScreenContoller.sendChangesToLibrary('createNewItem', 'todo', null);

   }


   function createPopupChooseButton(classes, text) {
      const popupBtn = document.createElement('button');
      popupBtn.classList.add(...classes);
      popupBtn.textContent = text;
      return popupBtn;
   }

   function verifyDeleteTodoCard(element) {

      const popupCancelBtn = components.createButton(['popup__cancel', 'btn', 'btn--grey'], 'Cancel');
      const popupDeleteBtn = createPopupChooseButton(['popup__delete', 'btn'], 'Delete');

      const popup = createPopup('Delete this todo card?', [popupCancelBtn, popupDeleteBtn]);



      handleClicks(element);

      function handleClicks(element) {
         popup.addEventListener('click', (event) => {
            if (event.target.classList.contains('popup__delete')) {

               console.log('Карточка удалена!:', element.id);

               ScreenContoller.sendChangesToLibrary('remove', 'todo', element.id);

               element.remove();
               popup.remove();

            } else if (!event.target.classList.contains('popup__block') || event.target.classList.contains('popup__cancel')) {
               popup.remove();
            }
         })
      }


   };


   return { renderPage, attachEventListeners };

}


const allTodos = allToDosController();
export default allTodos;
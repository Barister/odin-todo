import ScreenContoller from "./screencontroller";

export default function allToDosLoad(elementDOM, content) {

   // console.log('загружена страница All ToDos:', content);

   // console.log('elementDOM:', elementDOM);


   const pageInner = document.createElement('div');
   pageInner.classList.add('page__inner');

   const pageList = document.createElement('ul');
   pageList.classList.add('page__list');

   for (let i = 0; i < content.items.length; i++) {

      const pageTodoItem = document.createElement('li');
      pageTodoItem.classList.add('page__todo-item', 'todo-item');
      pageTodoItem.setAttribute('id', content.items[i].id);

      const todoItemDone = document.createElement('div');
      todoItemDone.classList.add('todo-item__done');

      const todoItemTitle = document.createElement('textarea');
      todoItemTitle.classList.add('todo-item__title');
      todoItemTitle.textContent = `${content.items[i].title}`;

      const todoItemImportanceDiv = document.createElement('div');
      todoItemImportanceDiv.classList.add('todo-item__importance');

      const todoItemImportanceIcon = document.createElement('i');



      todoItemImportanceIcon.classList.add('fas', 'fa-exclamation');
      if (content.items[i].priority) {
         todoItemImportanceIcon.classList.add('fa-exclamation--important');
      }

      todoItemImportanceDiv.appendChild(todoItemImportanceIcon);

      const todoItemPanel = document.createElement('div');
      todoItemPanel.classList.add('todo-item__panel');

      const todoItemCategory = document.createElement('div');
      todoItemCategory.classList.add('todo-item__category', `todo-item__${content.items[i].category.style}`);

      const todoItemProject = document.createElement('div');
      todoItemProject.classList.add('todo-item__project');
      todoItemProject.textContent = '#';

      const todoItemProjectSelect = document.createElement('select');

      content.projects.forEach(element => {
         // console.log(element);
         const todoItemProjectSelectOption = document.createElement('option');
         if (content.items[i].project === element.id) {
            todoItemProjectSelectOption.selected = true;
         }
         todoItemProjectSelectOption.textContent = element.title;
         todoItemProjectSelect.append(todoItemProjectSelectOption);
      });

      todoItemProject.appendChild(todoItemProjectSelect);


      const todoItemBlanket = document.createElement('div');
      todoItemBlanket.classList.add('todo-item__blanket');

      const todoItemDeleteDiv = document.createElement('div');
      todoItemDeleteDiv.classList.add('todo-item__delete');

      const todoItemDeleteIcon = document.createElement('i');
      todoItemDeleteIcon.classList.add('far', 'fa-trash-alt');

      todoItemDeleteDiv.appendChild(todoItemDeleteIcon);

      todoItemPanel.append(todoItemCategory, todoItemProject, todoItemBlanket, todoItemDeleteDiv);

      pageTodoItem.append(todoItemDone, todoItemTitle, todoItemImportanceDiv, todoItemPanel);


      pageList.appendChild(pageTodoItem);

   }

   pageInner.appendChild(pageList);

   elementDOM.appendChild(pageInner);

}
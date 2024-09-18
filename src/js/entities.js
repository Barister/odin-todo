export default class ItemToDo {
   constructor(id, title, description, dueDate, category, project, priority, status) {
      this.id = id,
         this.title = title,
         this.description = description,
         this.dueDate = dueDate,
         this.category = category,
         this.project = project,
         this.priority = priority,
         this.status = status
   }
}

export class Project {
   constructor(id, title, description, category, status) {
      this.id = id,
         this.title = title,
         this.description = description,
         this.category = category,
         this.status = status
   }
}

export class Note {
   constructor(id, text) {
      this.id = id,
         this.text = text
   }
}

export class Category {
   constructor(id, title) {
      this.id = id,
         this.title = title
   }
}
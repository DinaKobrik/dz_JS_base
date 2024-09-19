const ToDoList = {
  tasks: [],

  // Добавить задачу
  addTask: function (title, priority) {
    const id = this.tasks.length + 1;
    this.tasks.push({ title, id, priority });
  },

  // Удалить задачу по id
  removeTask: function (id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  },

  // Обновить имя или приоритет по id
  updateTask: function(id, newTitle = null, newPriority = null) {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
      const taskCopy = {...this.tasks[taskIndex]};
      if (newTitle !== null) taskCopy.title = newTitle;
      if (newPriority !== null) taskCopy.priority = newPriority;
      this.tasks[taskIndex] = taskCopy;
    }
  },

  // Отсортировать задачи по приоритету
  sortTasksByPriority: function() {
    this.tasks.sort((a, b) => a.priority - b.priority);
  },

  // Вывести все задачи
  showTasks: function() {
    console.log(this.tasks);
  }
};

// Пример использования:
ToDoList.addTask('Помыть посуду', 1);
ToDoList.addTask('Сделать домашнюю работу', 2);
ToDoList.addTask('Прогуляться', 3);

console.log('Список задач после добавления:');
ToDoList.showTasks();

ToDoList.removeTask(2);
console.log('Список задач после удаления задачи с id = 2:');
ToDoList.showTasks();

ToDoList.updateTask(1, 'Вытереть посуду', 2);
console.log('Список задач после обновления задачи с id = 1:');
ToDoList.showTasks();

ToDoList.sortTasksByPriority();
console.log('Список задач после сортировки по приоритету:');
ToDoList.showTasks();

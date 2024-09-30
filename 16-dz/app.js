const toDoList = {
    tasks: [],
    taskId: 0,
  
    // Добавить задачу
    addTask(title, priority, description = '') {
      this.tasks.push({ title, id: ++this.taskId, priority, description });
    },
  
    // Удалить задачу по id
    removeTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
    },
  
    // Обновить имя или приоритет по id
    updateTask(id, newTitle = null, newPriority = null, newDescription = null) {
      const taskIndex = this.tasks.findIndex(task => task.id === id);
      if (taskIndex !== -1) {
        const taskCopy = {...this.tasks[taskIndex]};
        if (newTitle !== null) taskCopy.title = newTitle;
        if (newPriority !== null) taskCopy.priority = newPriority;
        if (newDescription !== null) taskCopy.description = newDescription;
        this.tasks[taskIndex] = taskCopy;
      }
    },
  
    // Отсортировать задачи по приоритету
    sortTasksByPriority() {
      this.tasks.sort((a, b) => a.priority - b.priority);
    },
  
    // Вывести все задачи
    showTasks() {
      console.log(this.tasks);
    }
  };
  

const newTask = {
    tasks: [],
    taskId: 0,
}

const showTasksFunc = toDoList.showTasks;

const addNewTask = toDoList.addTask.bind(newTask);
addNewTask('Починить пульт', 3, 'Поменять батарейки');
addNewTask('Помыть кота', 2, 'Пролил сок');
addNewTask('Купить яблоки', 1, 'Красные');

console.log('Выыод после добавления задачи');
showTasksFunc.call(newTask);

const removeNewTask = toDoList.removeTask.bind(newTask);
removeNewTask(3);

console.log('Выыод после удаления задачи по id');
showTasksFunc.call(newTask);

const updateNewTask = toDoList.updateTask.bind(newTask);
updateNewTask(2, 'Высушить кота', 2,'Без фена');

console.log('Выыод после замены задачи по id');
showTasksFunc.call(newTask);

const sortNewTasksByPriority = toDoList.sortTasksByPriority.bind(newTask);
sortNewTasksByPriority();

console.log('Выыод после сортировки по приоритету');
showTasksFunc.call(newTask);
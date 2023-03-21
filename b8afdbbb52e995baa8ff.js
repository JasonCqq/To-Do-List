//factories?

export var projectArr = [];
export function createProject(title, id) {
  var taskArray = [];
  return {
    title: title,
    id: id,
    taskArray: taskArray,
    showProjectArr: function showProjectArr() {
      return projectArr;
    },
    pushTask: function pushTask(task) {
      taskArray.push(task);
    }
  };
}
export function pushProject(object) {
  projectArr.push(object);
}
export function showProjects() {
  return projectArr;
}
export var taskArr = [];
export function pushTask(task) {
  taskArr.push(task);
}
export function showTasks() {
  return taskArr;
}
export function removeTask(task) {
  var index = taskArr.indexOf(task);
  if (index > -1) {
    taskArr.splice(index, 1);
  }
}
export function createTask(title, dueDate, priority, description, notes, taskID, projectID) {
  projectID = getCurrentID();
  return {
    title: title,
    dueDate: dueDate,
    priority: priority,
    description: description,
    notes: notes,
    taskID: taskID,
    projectID: projectID
  };
}
export function assignID() {
  return String(Date.now() * Math.random());
}
var id;
export function currentDiv(projectID) {
  id = projectID;
}
export function getCurrentID() {
  return id;
}
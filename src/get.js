//factories?

export const projectArr = [];

export function createProject(title, id) {
  const taskArray = [];
  return {
    title,
    id,
    taskArray,

    showProjectArr() {
      return projectArr;
    },

    pushTask(task) {
      taskArray.push(task);
    },
  };
}

export function pushProject(object) {
  projectArr.push(object);
}

export function showProjects() {
  return projectArr;
}

export const taskArr = [];

export function pushTask(task) {
  taskArr.push(task);
}

export function showTasks() {
  return taskArr;
}

export function removeTask(task) {
  const index = taskArr.indexOf(task);
  if (index > -1) {
    taskArr.splice(index, 1);
  }
}

export function createTask(
  title,
  dueDate,
  priority,
  description,
  notes,
  taskID,
  projectID
) {
  projectID = getCurrentID();
  return {
    title,
    dueDate,
    priority,
    description,
    notes,
    taskID,
    projectID,
  };
}

export function assignID() {
  return String(Date.now() * Math.random());
}

let id;

export function currentDiv(projectID) {
  id = projectID;
}

export function getCurrentID() {
  return id;
}

//factories?

const projectArr = [];

export function createProject(title, id) {
  const taskArray = [];
  // let i = this;
  // projectArr.push({ title, id });
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
  // for (let key of projectArr) {
  //   console.log(key.title);
  // }
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
  // {
  //   for (const i of projectArr) {
  //     if (i.id === getCurrentID()) {
  //       i.pushTask(taskID);
  //     }
  //   }
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

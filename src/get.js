//factories?
export function createProject(title, id) {
  const taskArray = [];
  return {
    title,
    id,

    pushTask(task) {
      taskArray.push(task);
    },
  };
}

export function createTask(title, dueDate, priority, description, notes, id) {
  return {
    title,
    dueDate,
    priority,
    description,
    notes,
    id,
  };
}

export function assignID() {
  return String(Date.now() * Math.random());
}

//factories?
export function createProject() {}

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

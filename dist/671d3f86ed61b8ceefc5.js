function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
import { assignID, createTask, createProject, currentDiv, getCurrentID, showProjects, showTasks, removeTask, pushProject, pushTask } from "./get.js";
//get username
export function getUserName() {
  var usernameInput = document.getElementById("usernameInput");
  var username = usernameInput.value;
  return username;
}

//html template
export function elementFromHtml(html) {
  var template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
}

//adds second main page
export function addGrid() {
  var grid = elementFromHtml("\n        <div class=\"grid-container\">\n            <div id=\"welcome\"></div>\n            <div id=\"details\"></div>\n            <div id=\"projects\">\n              <div>\n                <h1>Projects</h1>\n              </div>\n              <div id=\"projects-grid\">\n                <div id='project0' class=\"projectItem\"><p>Default Project</p></div>\n              </div>\n              <button type=\"submit\" id=\"createProject\">Create New</button>\n            </div>\n            <div id=\"todos\">\n              <div class=\"todosTitle\">\n                <h1>To-dos</h1>\n                <button type=\"submit\" id=\"createNewTask\">Create a new task</button>\n              </div>\n\n              <div id=\"tasks\">\n              </div>\n\n            </div>\n        </div>\n    ");
  document.body.appendChild(grid);
  currentDiv("project1");
}

//create form when creating a new todo
export function createNewTaskFunction() {
  var btn = document.getElementById("createNewTask");
  btn.addEventListener("click", function () {
    createToDoForm();
    createTaskButtonFunction();
  });
}
function createTaskButtonFunction() {
  var btn5 = document.getElementById("submitForm");
  var tasks = document.getElementById("tasks");
  var titleInput = document.getElementById("titleInput");
  var dueDateInput = document.getElementById("dueDateInput");
  var priorityInput = document.getElementById("priorityInput");
  var descriptionInput = document.getElementById("descriptionInput");
  var notesInput = document.getElementById("notesInput");
  btn5.addEventListener("click", function (e) {
    e.preventDefault();
    var task = createTask(titleInput.value, dueDateInput.value, priorityInput.value, descriptionInput.value, notesInput.value, assignID());
    pushTask(task);
    var tempArray = showProjects();
    var _iterator = _createForOfIteratorHelper(tempArray),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var key = _step.value;
        if (key.id == getCurrentID()) {
          key.pushTask(task);
          var taskDiv = elementFromHtml("\n            <div class=\"task-item ".concat(task.taskID, "\">\n              <h3>Task-").concat(task.title, "</h3>\n              <p>Due: ").concat(task.dueDate, "</p>\n              <p>Priority: ").concat(task.priority, "</p>\n              <p>Description: ").concat(task.description, "</p>\n            </div>\n          "));
          tasks.appendChild(taskDiv);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    showTaskDetail();
    titleInput.value = "";
    dueDateInput.value = "";
    priorityInput.value = "";
    descriptionInput.value = "";
    notesInput.value = "";
  });
}

//todo form
export function createToDoForm() {
  var details = document.getElementById("details");
  var form = elementFromHtml("\n  <form>\n    <div id=\"title-grid\">\n      <label for=\"titleInput\">Title</label> <br>\n      <input id=\"titleInput\" name=\"titleInput\" type=\"text\">\n    </div>\n\n    <div id=\"description-grid\">\n      <label for=\"descriptionInput\">Description</label> <br>\n      <textarea id=\"descriptionInput\" name=\"descriptionInput\" type=\"text\"></textarea>\n    </div>\n\n    <div id=\"dueDate-grid\">\n      <label for=\"dueDateInput\">Due Date</label> <br>\n      <input id=\"dueDateInput\" name=\"dueDateInput\" type=\"date\">\n    </div>\n\n    <div id=\"priority-grid\"> \n      <h3>Priority</h3>\n      <input id=\"priorityInput\" type=\"text\" placeholder=\"urgency...\">\n    </div>\n\n    <div id=\"notes-grid\">\n      <label for=\"notesInput\">Extra Notes</label> <br>\n      <textarea  id=\"notesInput\" name=\"notesInput\" type=\"text\"></textarea>\n    </div>\n\n    <div id=\"submitForm-grid\">\n      <button id=\"submitForm\">CREATE</button>\n    </div>\n  </form>\n  ");
  removeAllChildElements(details);
  details.appendChild(form);
}

//welcome the user with the current date
export function welcomeTheUser(username) {
  var welcome = document.getElementById("welcome");
  var welcomeMessage = document.createElement("p");
  var amountOfTasksMessage = document.createElement("p");
  var d = new Date().toDateString();
  welcomeMessage.innerHTML = "Welcome, ".concat(username, " <br> ").concat(d);
  amountOfTasksMessage.innerHTML = "You have # of tasks due TODAY";
  welcome.appendChild(welcomeMessage);
  welcome.appendChild(amountOfTasksMessage);
  var project1 = createProject("Default", "project1");
  pushProject(project1);
  defaultProjectFunction();
}
export function createProjectButtonFunction() {
  var createNewProject = document.getElementById("createProject");
  var projectGrid = document.getElementById("projects-grid");
  var tempDiv = document.createElement("div");
  var input = document.createElement("input");
  var button = document.createElement("button");
  button.textContent = "+";
  button.id = "projectTitleSubmit";
  button.type = "submit";
  input.id = "projectTitleInput";
  createNewProject.addEventListener("click", function (e) {
    e.preventDefault();
    projectGrid.appendChild(tempDiv);
    tempDiv.appendChild(input);
    tempDiv.appendChild(button);
    tempDiv.id = assignID();
    tempDiv.style.display = "block";
    button.addEventListener("click", submitButtonClick);
    function submitButtonClick(e) {
      e.preventDefault();
      var newDiv = document.createElement("div");
      var p = document.createElement("p");
      p.classList.add("project-title");
      var project = createProject(input.value, assignID());
      pushProject(project);
      newDiv.id = project.id;
      newDiv.classList.add("projectItem");
      projectGrid.appendChild(newDiv);
      newDiv.appendChild(p);
      newDiv.addEventListener("click", function () {
        currentDiv(project.id);
        lightUpDiv(project.id);
        var task = document.getElementById("tasks");
        removeAllChildElements(task);
        var _iterator2 = _createForOfIteratorHelper(project.taskArray),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var key = _step2.value;
            var taskDiv = elementFromHtml("\n            <div class=\"task-item ".concat(key.taskID, "\">\n              <h3>Task-").concat(key.title, "</h3>\n              <p>Due: ").concat(key.dueDate, "</p>\n              <p>Priority: ").concat(key.priority, "</p>\n              <p>Description: ").concat(key.description, "</p>\n            </div>\n          "));
            task.appendChild(taskDiv);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        deleteTaskButton();
      });
      newDiv.appendChild(removeProjectFunction());
      removeButtonFunction(newDiv.id);
      p.textContent = project.title;
      tempDiv.style.display = "none";
      button.removeEventListener("click", submitButtonClick);
      input.value = "";
    }
  });
}
function removeAllChildElements(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
export function removeProjectFunction() {
  var btn = document.createElement("button");
  btn.className = "deleteButton";
  btn.textContent = "-";
  btn.type = "submit";
  return btn;
}
function lightUpDiv(id) {
  var tempid1 = Array.from(document.querySelectorAll("div.projectItem"));
  var tempid2 = document.getElementById("".concat(id));
  var pElement = tempid2.querySelector("p");
  for (var i = 0; i < tempid1.length; i++) {
    tempid1[i].style.backgroundColor = "rgba(255, 255, 255, 0.05)";
    var pElement2 = tempid1[i].querySelector("p");
    pElement2.style.color = "white";
  }
  tempid2.style.backgroundColor = "white";
  pElement.style.color = "blue";
}
export function removeButtonFunction(currentDiv) {
  var btn = document.querySelectorAll(".deleteButton");
  btn.forEach(function (buttons) {
    return buttons.addEventListener("click", function () {
      var divId = document.getElementById(currentDiv);
      divId.remove();
    });
  });
}
export function defaultProjectFunction() {
  var defaultProject = document.getElementById("project0");
  defaultProject.addEventListener("click", function () {
    currentDiv("project1");
    lightUpDiv("project0");
    var task = document.getElementById("tasks");
    removeAllChildElements(task);
    var tempArray = showProjects();
    var _iterator3 = _createForOfIteratorHelper(tempArray),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var key = _step3.value;
        if (key.id == "project1") {
          var _iterator4 = _createForOfIteratorHelper(key.taskArray),
            _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var i = _step4.value;
              var taskDiv = elementFromHtml("\n                <div class=\"task-item ".concat(i.taskID, "\">\n                <h3>Task-").concat(i.title, "</h3>\n                <p>Due: ").concat(i.dueDate, "</p>\n                <p>Priority: ").concat(i.priority, "</p>\n                <p>Description: ").concat(i.description, "</p>\n              </div>\n                </div>\n              "));
              task.appendChild(taskDiv);
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    deleteTaskButton();
    showTaskDetail();
  });
}
function showTaskDetail() {
  var task = Array.from(document.querySelectorAll("div.task-item"));
  var detailContainer = document.getElementById("details");
  var _loop = function _loop() {
    var a = _task[_i];
    //Each Div
    a.addEventListener("click", function () {
      //Add click
      var tempArray = showTasks(); //Get Task Array
      removeAllChildElements(detailContainer); //Remove anything in details
      var _iterator5 = _createForOfIteratorHelper(tempArray),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var b = _step5.value;
          //Looping through the Task Array
          if (b.taskID == a.getAttribute("class").split(" ")[1]) {
            //If ID is correct
            var taskDiv = elementFromHtml("\n          <div class='task-detail'> \n            <h3>Title: ".concat(b.title, "</h3>\n            <p>Due: ").concat(b.dueDate, "</p>\n            <p>Priority: ").concat(b.priority, "</p>\n            <p>Description: ").concat(b.description, "</p>\n            <p>Notes: ").concat(b.notes, "</p>\n          </div>\n          "));
            detailContainer.appendChild(taskDiv);
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    });
  };
  for (var _i = 0, _task = task; _i < _task.length; _i++) {
    _loop();
  }
  deleteTaskButton();
}
function deleteTaskButton() {
  var task = Array.from(document.querySelectorAll("div.task-item"));
  var tempArray = showTasks();
  var btn = document.createElement("button");
  btn.textContent = "delete";
  btn.classList.add("deleteTaskButton");
  task.forEach(function (element) {
    return element.appendChild(btn);
  });
  btn.addEventListener("click", function () {
    var tempID = btn.parentElement.getAttribute("class").split(" ")[1];
    for (var _i2 = 0, _task2 = task; _i2 < _task2.length; _i2++) {
      var a = _task2[_i2];
      if (a.getAttribute("class").split(" ")[1] == tempID) {
        a.remove();
        var _iterator6 = _createForOfIteratorHelper(tempArray),
          _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var b = _step6.value;
            if (b.taskID == tempID) {
              removeTask(b);
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      }
    }
  });
}
(() => {
  "use strict";
  var t,
    e,
    n = {
      538: (t, e, n) => {
        n.d(e, {
          $L: () => i,
          F6: () => p,
          KN: () => l,
          RQ: () => v,
          _Q: () => f,
          hH: () => a,
          ph: () => d,
          sg: () => r,
          tY: () => m,
          tg: () => o,
          up: () => u,
          vr: () => s,
        });
        var r = [];
        function i(t, e) {
          var n = [];
          return {
            title: t,
            id: e,
            taskArray: n,
            showProjectArr: function () {
              return r;
            },
            pushTask: function (t) {
              n.push(t);
            },
          };
        }
        function o(t) {
          r.push(t);
        }
        function a() {
          return r;
        }
        var c,
          d = [];
        function l(t) {
          d.push(t);
        }
        function u() {
          return d;
        }
        function p(t) {
          var e = d.indexOf(t);
          e > -1 && d.splice(e, 1);
        }
        function s(t, e, n, r, i, o, a) {
          return {
            title: t,
            dueDate: e,
            priority: n,
            description: r,
            notes: i,
            taskID: o,
            projectID: f(),
          };
        }
        function v() {
          return String(Date.now() * Math.random());
        }
        function m(t) {
          c = t;
        }
        function f() {
          return c;
        }
      },
      52: (t, e, n) => {
        n.d(e, {
          Et: () => d,
          Gf: () => u,
          Jp: () => p,
          XX: () => v,
          uN: () => l,
          vW: () => a,
        });
        var r = n(538);
        function i(t, e) {
          var n =
            ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
            t["@@iterator"];
          if (!n) {
            if (
              Array.isArray(t) ||
              (n = (function (t, e) {
                if (t) {
                  if ("string" == typeof t) return o(t, e);
                  var n = Object.prototype.toString.call(t).slice(8, -1);
                  return (
                    "Object" === n && t.constructor && (n = t.constructor.name),
                    "Map" === n || "Set" === n
                      ? Array.from(t)
                      : "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? o(t, e)
                      : void 0
                  );
                }
              })(t)) ||
              (e && t && "number" == typeof t.length)
            ) {
              n && (t = n);
              var r = 0,
                i = function () {};
              return {
                s: i,
                n: function () {
                  return r >= t.length
                    ? { done: !0 }
                    : { done: !1, value: t[r++] };
                },
                e: function (t) {
                  throw t;
                },
                f: i,
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          var a,
            c = !0,
            d = !1;
          return {
            s: function () {
              n = n.call(t);
            },
            n: function () {
              var t = n.next();
              return (c = t.done), t;
            },
            e: function (t) {
              (d = !0), (a = t);
            },
            f: function () {
              try {
                c || null == n.return || n.return();
              } finally {
                if (d) throw a;
              }
            },
          };
        }
        function o(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        function a() {
          return document.getElementById("usernameInput").value;
        }
        function c(t) {
          var e = document.createElement("template");
          return (e.innerHTML = t.trim()), e.content.firstElementChild;
        }
        function d() {
          var t = c(
            '\n        <div class="grid-container">\n            <div id="welcome"></div>\n            <div id="details"></div>\n            <div id="projects">\n              <div>\n                <h1>Projects</h1>\n              </div>\n              <div id="projects-grid">\n                <div id=\'project0\' class="projectItem"><p>Default Project</p></div>\n              </div>\n              <button type="submit" id="createProject">Create New</button>\n            </div>\n            <div id="todos">\n              <div class="todosTitle">\n                <h1>To-dos</h1>\n                <button type="submit" id="createNewTask">Create a new task</button>\n              </div>\n\n              <div id="tasks">\n              </div>\n\n            </div>\n        </div>\n    '
          );
          document.body.appendChild(t), (0, r.tY)("project1");
        }
        function l() {
          document
            .getElementById("createNewTask")
            .addEventListener("click", function () {
              var t, e, n, o, a, d, l, u, p;
              (t = document.getElementById("details")),
                (e = c(
                  '\n  <form>\n    <div id="title-grid">\n      <label for="titleInput">Title</label> <br>\n      <input id="titleInput" name="titleInput" type="text">\n    </div>\n\n    <div id="description-grid">\n      <label for="descriptionInput">Description</label> <br>\n      <textarea id="descriptionInput" name="descriptionInput" type="text"></textarea>\n    </div>\n\n    <div id="dueDate-grid">\n      <label for="dueDateInput">Due Date</label> <br>\n      <input id="dueDateInput" name="dueDateInput" type="date">\n    </div>\n\n    <div id="priority-grid"> \n      <h3>Priority</h3>\n      <input id="priorityInput" type="text" placeholder="urgency...">\n    </div>\n\n    <div id="notes-grid">\n      <label for="notesInput">Extra Notes</label> <br>\n      <textarea  id="notesInput" name="notesInput" type="text"></textarea>\n    </div>\n\n    <div id="submitForm-grid">\n      <button id="submitForm">CREATE</button>\n    </div>\n  </form>\n  '
                )),
                s(t),
                t.appendChild(e),
                (n = document.getElementById("submitForm")),
                (o = document.getElementById("tasks")),
                (a = document.getElementById("titleInput")),
                (d = document.getElementById("dueDateInput")),
                (l = document.getElementById("priorityInput")),
                (u = document.getElementById("descriptionInput")),
                (p = document.getElementById("notesInput")),
                n.addEventListener("click", function (t) {
                  t.preventDefault();
                  var e = (0, r.vr)(
                    a.value,
                    d.value,
                    l.value,
                    u.value,
                    p.value,
                    (0, r.RQ)()
                  );
                  (0, r.KN)(e);
                  var n,
                    s = i((0, r.hH)());
                  try {
                    for (s.s(); !(n = s.n()).done; ) {
                      var v = n.value;
                      if (v.id == (0, r._Q)()) {
                        v.pushTask(e);
                        var m = c(
                          '\n            <div class="task-item '
                            .concat(e.taskID, '">\n              <h3>Task-')
                            .concat(e.title, "</h3>\n              <p>Due: ")
                            .concat(
                              e.dueDate,
                              "</p>\n              <p>Priority: "
                            )
                            .concat(
                              e.priority,
                              "</p>\n              <p>Description: "
                            )
                            .concat(
                              e.description,
                              "</p>\n            </div>\n          "
                            )
                        );
                        o.appendChild(m);
                      }
                    }
                  } catch (t) {
                    s.e(t);
                  } finally {
                    s.f();
                  }
                  f(),
                    (a.value = ""),
                    (d.value = ""),
                    (l.value = ""),
                    (u.value = ""),
                    (p.value = "");
                });
            });
        }
        function u(t) {
          var e = document.getElementById("welcome"),
            n = document.createElement("p"),
            o = document.createElement("p"),
            a = new Date().toDateString();
          (n.innerHTML = "Welcome, ".concat(t, " <br> ").concat(a)),
            (o.innerHTML = "You have # of tasks due TODAY"),
            e.appendChild(n),
            e.appendChild(o);
          var d = (0, r.$L)("Default", "project1");
          (0, r.tg)(d),
            document
              .getElementById("project0")
              .addEventListener("click", function () {
                (0, r.tY)("project1"), m("project0");
                var t = document.getElementById("tasks");
                s(t);
                var e,
                  n = i((0, r.hH)());
                try {
                  for (n.s(); !(e = n.n()).done; ) {
                    var o = e.value;
                    if ("project1" == o.id) {
                      var a,
                        d = i(o.taskArray);
                      try {
                        for (d.s(); !(a = d.n()).done; ) {
                          var l = a.value,
                            u = c(
                              '\n                <div class="task-item '
                                .concat(
                                  l.taskID,
                                  '">\n                <h3>Task-'
                                )
                                .concat(
                                  l.title,
                                  "</h3>\n                <p>Due: "
                                )
                                .concat(
                                  l.dueDate,
                                  "</p>\n                <p>Priority: "
                                )
                                .concat(
                                  l.priority,
                                  "</p>\n                <p>Description: "
                                )
                                .concat(
                                  l.description,
                                  "</p>\n              </div>\n                </div>\n              "
                                )
                            );
                          t.appendChild(u);
                        }
                      } catch (t) {
                        d.e(t);
                      } finally {
                        d.f();
                      }
                    }
                  }
                } catch (t) {
                  n.e(t);
                } finally {
                  n.f();
                }
                y(), f();
              });
        }
        function p() {
          var t = document.getElementById("createProject"),
            e = document.getElementById("projects-grid"),
            n = document.createElement("div"),
            o = document.createElement("input"),
            a = document.createElement("button");
          (a.textContent = "+"),
            (a.id = "projectTitleSubmit"),
            (a.type = "submit"),
            (o.id = "projectTitleInput"),
            t.addEventListener("click", function (t) {
              t.preventDefault(),
                e.appendChild(n),
                n.appendChild(o),
                n.appendChild(a),
                (n.id = (0, r.RQ)()),
                (n.style.display = "block"),
                a.addEventListener("click", function t(d) {
                  d.preventDefault();
                  var l = document.createElement("div"),
                    u = document.createElement("p");
                  u.classList.add("project-title");
                  var p,
                    f = (0, r.$L)(o.value, (0, r.RQ)());
                  (0, r.tg)(f),
                    (l.id = f.id),
                    l.classList.add("projectItem"),
                    e.appendChild(l),
                    l.appendChild(u),
                    l.addEventListener("click", function () {
                      (0, r.tY)(f.id), m(f.id);
                      var t = document.getElementById("tasks");
                      s(t);
                      var e,
                        n = i(f.taskArray);
                      try {
                        for (n.s(); !(e = n.n()).done; ) {
                          var o = e.value,
                            a = c(
                              '\n            <div class="task-item '
                                .concat(o.taskID, '">\n              <h3>Task-')
                                .concat(
                                  o.title,
                                  "</h3>\n              <p>Due: "
                                )
                                .concat(
                                  o.dueDate,
                                  "</p>\n              <p>Priority: "
                                )
                                .concat(
                                  o.priority,
                                  "</p>\n              <p>Description: "
                                )
                                .concat(
                                  o.description,
                                  "</p>\n            </div>\n          "
                                )
                            );
                          t.appendChild(a);
                        }
                      } catch (t) {
                        n.e(t);
                      } finally {
                        n.f();
                      }
                      y();
                    }),
                    l.appendChild(v()),
                    (p = l.id),
                    document
                      .querySelectorAll(".deleteButton")
                      .forEach(function (t) {
                        return t.addEventListener("click", function () {
                          document.getElementById(p).remove();
                        });
                      }),
                    (u.textContent = f.title),
                    (n.style.display = "none"),
                    a.removeEventListener("click", t),
                    (o.value = "");
                });
            });
        }
        function s(t) {
          for (; t.firstChild; ) t.removeChild(t.firstChild);
        }
        function v() {
          var t = document.createElement("button");
          return (
            (t.className = "deleteButton"),
            (t.textContent = "-"),
            (t.type = "submit"),
            t
          );
        }
        function m(t) {
          for (
            var e = Array.from(document.querySelectorAll("div.projectItem")),
              n = document.getElementById("".concat(t)),
              r = n.querySelector("p"),
              i = 0;
            i < e.length;
            i++
          )
            (e[i].style.backgroundColor = "rgba(255, 255, 255, 0.05)"),
              (e[i].querySelector("p").style.color = "white");
          (n.style.backgroundColor = "white"), (r.style.color = "blue");
        }
        function f() {
          for (
            var t = Array.from(document.querySelectorAll("div.task-item")),
              e = document.getElementById("details"),
              n = function () {
                var t = a[o];
                t.addEventListener("click", function () {
                  var n = (0, r.up)();
                  s(e);
                  var o,
                    a = i(n);
                  try {
                    for (a.s(); !(o = a.n()).done; ) {
                      var d = o.value;
                      if (d.taskID == t.getAttribute("class").split(" ")[1]) {
                        var l = c(
                          "\n          <div class='task-detail'> \n            <h3>Title: "
                            .concat(d.title, "</h3>\n            <p>Due: ")
                            .concat(
                              d.dueDate,
                              "</p>\n            <p>Priority: "
                            )
                            .concat(
                              d.priority,
                              "</p>\n            <p>Description: "
                            )
                            .concat(
                              d.description,
                              "</p>\n            <p>Notes: "
                            )
                            .concat(
                              d.notes,
                              "</p>\n          </div>\n          "
                            )
                        );
                        e.appendChild(l);
                      }
                    }
                  } catch (t) {
                    a.e(t);
                  } finally {
                    a.f();
                  }
                });
              },
              o = 0,
              a = t;
            o < a.length;
            o++
          )
            n();
          y();
        }
        function y() {
          var t = Array.from(document.querySelectorAll("div.task-item")),
            e = (0, r.up)(),
            n = document.createElement("button");
          (n.textContent = "delete"),
            n.classList.add("deleteTaskButton"),
            t.forEach(function (t) {
              return t.appendChild(n);
            }),
            n.addEventListener("click", function () {
              for (
                var o = n.parentElement.getAttribute("class").split(" ")[1],
                  a = 0,
                  c = t;
                a < c.length;
                a++
              ) {
                var d = c[a];
                if (d.getAttribute("class").split(" ")[1] == o) {
                  d.remove();
                  var l,
                    u = i(e);
                  try {
                    for (u.s(); !(l = u.n()).done; ) {
                      var p = l.value;
                      p.taskID == o && (0, r.F6)(p);
                    }
                  } catch (t) {
                    u.e(t);
                  } finally {
                    u.f();
                  }
                }
              }
            });
        }
      },
    },
    r = {};
  function i(t) {
    var e = r[t];
    if (void 0 !== e) return e.exports;
    var o = (r[t] = { exports: {} });
    return n[t](o, o.exports, i), o.exports;
  }
  (i.d = (t, e) => {
    for (var n in e)
      i.o(e, n) &&
        !i.o(t, n) &&
        Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
  }),
    (i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (t = i(52)),
    (e = i(538)),
    window.addEventListener("load", function () {
      var n, r, i;
      (n = document.getElementById("getStartedButton")),
        (r = document.getElementById("usernameInput")),
        (i = document.getElementById("mainScreen")),
        n.addEventListener("click", function () {
          if ("" !== r.value) {
            var e = (0, t.vW)();
            i.remove(),
              (0, t.Et)(),
              (0, t.uN)(),
              (0, t.Jp)(),
              (0, t.XX)(),
              (0, t.Gf)(e);
          }
        });
      for (var o = 0; o < e.sg.length; o++) {
        var a = e.sg[o];
        localStorage.setItem("project_".concat(a.id), JSON.stringify(a));
      }
      for (var c = 0; c < e.ph.length; c++) {
        var d = e.ph[c];
        localStorage.setItem("task_".concat(d.id), JSON.stringify(d));
      }
      for (var l = 0; l < localStorage.length; l++) {
        var u = localStorage.key(l),
          p = JSON.parse(localStorage.getItem(u));
        u.startsWith("project_")
          ? e.sg.push(p)
          : u.startsWith("task_") && e.ph.push(p);
      }
    });
})();

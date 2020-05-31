const add = document.getElementById("add");
const task = document.getElementById("task");
const tableDataId = document.getElementById("tableData");
const table = document.getElementById("table");

const todos = [];

add.addEventListener("click", () => {
  if (!task.value == "") {
    const todo = { task: task.value, status: "作業中" };
    todos.push(todo); // 追加
    showTodos();
    console.log(todos);
  } else {
    alert("タスクを入力してください。");
  }
});

const showTodos = () => {
  while (table.children[1]) {
    table.removeChild(table.children[1]);
  }

  todos.forEach((todo, index) => {
    const createId = document.createElement("td");
    const createComment = document.createElement("td");

    createId.textContent = index;
    createComment.textContent = todo.task ;

    const createTr = document.createElement("tr");
    const createStatus = document.createElement("td");

    const statusFunc = createStatusButtonFunc(todo.status);
    const removeFunc = createRemoveButtonFunc(index);


    createStatus.appendChild(statusFunc);
    createStatus.appendChild(removeFunc);
    createTr.appendChild(createId);
    createTr.appendChild(createComment);
    createTr.appendChild(createStatus);

    table.appendChild(createTr);

    const deleteButton = document.getElementById(index);
    deleteButton.addEventListener("click", () => {
      todos.splice(deleteButton, 1);
      showTodos();
    });
  });

  task.value = "";
};

function createStatusButtonFunc(status) {
  const createStatusButton = document.createElement("button");
  createStatusButton.textContent = status;
  createStatusButton.setAttribute("class", "statusButton");

  return createStatusButton;
}

function createRemoveButtonFunc(index) {
  const createRemoveButton = document.createElement("button");
  createRemoveButton.textContent = "削除";
  createRemoveButton.setAttribute("id", index);

  return createRemoveButton;
}

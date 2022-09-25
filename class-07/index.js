// Define Variables
let list = [
  {
    id: 0,
    todo: "Wash dishes",
    completed: false,
  },
  {
    id: 1,
    todo: "Feed Charlie",
    completed: true,
  },
  {
    id: 2,
    todo: "Get an oil change",
    completed: false,
  },
];

const todoListElement = document.getElementById("todolist");

// Define functions
function renderTodoList() {
  // Loop through array of todos
  // Create elements and then append them onto the webpage
  list.forEach((item) => {
    todoListElement.innerHTML += `
      <li class="todo ${item.completed ? "completed" : "uncompleted"}"> 
        <span>${item.todo}</span>
        <span class="options"> 
          <button class="btn active"  onclick="toggleActive(${item.id})">${
            item.completed ? "Incomplete" : "Complete"
          }</button>        
          <button class="btn delete" onclick="removeTodo(${item.id})">Delete</button>        
        </span>
      </li>
    `;
  });
}

function removeTodo(id){
  list = list.filter((todo)=>{
    return todo.id != id;
  })
  todoListElement.innerHTML = '';
  renderTodoList();
}

function toggleActive(id){
  list = list.map((todo)=>{
    console.log(todo)
    if(todo.id === id){
      console.log('test')
      todo.completed = !todo.completed;
    }
    return todo;
  })

  todoListElement.innerHTML = '';
  console.log(list)
  renderTodoList();
}

// Execute at the start of execution
renderTodoList();

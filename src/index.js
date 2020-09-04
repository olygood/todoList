import "./style.css";

const ul = document.querySelector('ul');

const todos = [
    {
        text : "je suis une todo",
        done : false,

    },
    {
        text : "faire du jsx",
        done : true,
    }
]

const displayTodo = () =>{
    const todosNode = todos.map((todo,index) =>{
        return createtodoElement(todo,index);
    })
    ul.innerHTML = '';
    ul.append(...todosNode);
}


const createtodoElement = (todo,index) => {
    const li = document.createElement('li');

    li.innerHTML = `
        <span class ="todo ${todo.done ? "done" : ' '}"> </span>
        <p> ${todo.text }</p>
        <button> Supprimer</button>
    `;
        return li;
};
displayTodo();
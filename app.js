const todolists = document.querySelector(".todolists");
const listvalue = document.querySelector(".todovalue");
let todolistvalue = [];


const todolistfromlocalstorage =()=>{
    return JSON.parse(localStorage.getItem('todo')) || [];
}

const addtodolistlocalstorage = (todo) =>{
    return localStorage.setItem('todo', JSON.stringify(todo))
}

const showtodolist =()=>{
    todolistvalue = todolistfromlocalstorage();
    todolistvalue.forEach((curtodo) => {
    const liElements = document.createElement("li");
    liElements.innerHTML = curtodo;
    todolists.append(liElements)
    });
}

const removetodolist =(e)=>{
    console.log(e.target.textContent);
    let currenttodo = e.target;
    console.log(todolistvalue);
    updatedtodolist = todolistvalue.filter(
    (curtodovalue) => curtodovalue !== currenttodo.textContent);


    addtodolistlocalstorage(updatedtodolist);
    currenttodo.remove();
    // todolists.innerHTML = "";
    // showtodolist();
    console.log(updatedtodolist);
};
const addtodolist = (e) => {
    e.preventDefault();

    // console.log(listvalue.value)
    // listvalue ="";

    todolistvalue = todolistfromlocalstorage();
    let newtodo = listvalue.value.trim();

    if(newtodo.length != 0 && !todolistvalue.includes(newtodo)){
        todolistvalue.push(newtodo);
        // todolistvalue = [...new Set(todolistvalue)]
        addtodolistlocalstorage(todolistvalue);
        const liElements = document.createElement("li");
        liElements.innerHTML = listvalue.value;
        todolists.append(liElements)
}
}

showtodolist();
document.querySelector(".btn").addEventListener('click', (e)=>{
    addtodolist(e);
})

todolists.addEventListener('click',(e)=>{
    removetodolist(e)
})
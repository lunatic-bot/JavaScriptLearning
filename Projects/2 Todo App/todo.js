let todoList = [
    {
        item: 'Buy Milk', 
        dueDate: '28/12/2024'
    }, 
    {
        item: 'Go to college.', 
        dueDate: '28/12/2024'
    }
];

displayItems();
function addTodo(){
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let tododate = dateElement.value;
    // console.log(todoItem);
    todoList.push({item : todoItem, dueDate: tododate});
    inputElement.value = '';
    dateElement.value = '';
    displayItems();
}


function displayItems(){
    let containerElement = document.querySelector('.todo-container');

    let newHTML = '';

    // displayElement.innerText = '';
    for (let i = 0; i < todoList.length; i++) {
        // let item = todoList[i].item;
        // let dueDate = todoList[i].dueDate;
        let {item, dueDate} = todoList[i];
        newHTML += `
            <span>${item}</span>
            <span>${dueDate}</span>
            <button class='btn-delete' onclick="todoList.splice(${i}, 1);
            displayItems();">Delete</button>
        
        `;
        // displayElement.innerText = displayElement.innerText 
        // + "\n" + todoList[i];
    }
    containerElement.innerHTML = newHTML;

}
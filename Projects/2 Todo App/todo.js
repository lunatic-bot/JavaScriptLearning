let todoList = ['Buy Milk', 'Go to college.'];

displayItems();
function addTodo(){
    let inputElement = document.querySelector('#todo-input');
    let todoItem = inputElement.value;
    // console.log(todoItem);
    todoList.push(todoItem);
    inputElement.value = '';
    displayItems();
}


function displayItems(){
    let containerElement = document.querySelector('.todo-container');

    let newHTML = '';

    // displayElement.innerText = '';
    for (let i = 0; i < todoList.length; i++) {
        newHTML += `
        <div>
            <span>${todoList[i]}</span>
            <button onclick="todoList.splice(${i}, 1);
            displayItems();">Delete</button>
        </div>
        `;
        // displayElement.innerText = displayElement.innerText 
        // + "\n" + todoList[i];
    }
    containerElement.innerHTML = newHTML;

}
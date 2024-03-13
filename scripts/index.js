const addNewTodoButton = document.querySelector(".add-button");

addNewTodoButton.addEventListener("click", () => {
    const addTodoModal = document.querySelector(".add-todo-modal");
    addTodoModal.show();
})
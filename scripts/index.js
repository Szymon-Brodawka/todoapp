const addNewTodoButton = document.querySelector(".add-button");
const closeModalButton = document.querySelector(".add-todo-modal-close-button");
const addTodoModal = document.querySelector(".add-todo-modal");

addNewTodoButton.addEventListener("click", () => {
    addTodoModal.show();
})

closeModalButton.addEventListener("click", () => {
    addTodoModal.close();
})
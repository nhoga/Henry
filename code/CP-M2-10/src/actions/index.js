// Podes usar esta variable para generar un ID por cada Todo.
let todoId = 0

export function addTodo(input) {
    todoId++
    return {
        payload: { ...input, id: todoId, status: "Todo" },
        type: "AddTodo"
    }
}

export function removeTodo(todoId) {
    return {
        payload: todoId,
        type: "RemoveTodo"
    }
}

export function toInProgress(todoId) {
    return {
        payload: todoId,
        type: "ToInProgress"
    }
}

export function toDone(todoId) {
    return {
        payload: todoId,
        type: "ToDone"
    }
}

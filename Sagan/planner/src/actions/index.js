export const createTask = (text, id, done) => ({
    type: "CREATE_TASK",
    payload: {
        text: text,
        id: id,
        done: done
    }
});

export const completeTask = (id) => ({
    type: "COMPLETE_TASK",
    payload: {
        id: id
    }
})
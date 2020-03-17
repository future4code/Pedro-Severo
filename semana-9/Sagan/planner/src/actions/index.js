export const createTask = (text) => ({
    type: "CREATE_TASK",
    payload: {
        text: text
    }
});
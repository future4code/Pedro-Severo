const initialState = [{
}]


export const tasks = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_TASK":
            const newTask = {
                text: action.payload.text,
                id: action.payload.id,
                done: action.payload.done
            }
            return [...state, newTask];
        case "COMPLETE_TASK": 
            const newState = [...state]
            function findTask(task) {
                return task.id === action.payload.id
            };
            newState.find(findTask).done = false
            return [...newState]
        default:
            return state;
    };
};
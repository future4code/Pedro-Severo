const initialState = []

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TASKS":
            return action.payload.tasks
        default:
            return state;
    }
}
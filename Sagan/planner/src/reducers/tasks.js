const initialState = [{
}]


export const tasks = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_TASK":
            const newTask = {
                text: action.payload.text
            }
            return [...state, newTask];
        default:
            return state;
    };
};
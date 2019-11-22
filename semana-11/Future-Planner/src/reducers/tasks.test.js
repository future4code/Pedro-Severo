import { tasksReducer } from "./tasks";

describe("Tasks Reducer", () => {
    const mockTask = {
        text: "text",
        day: "monday",
    };

    it("Set Tasks", () => {
        const mockTasks = [mockTask]
        const expectAction = {
            type: "SET_TASKS",
            payload: {
                tasks: mockTasks
            }
        };
        const newState = tasksReducer(undefined, expectAction);
        
        expect(newState).toHaveLength(1);
        expect(newState[0]).toMatchObject(mockTask);
    });
});
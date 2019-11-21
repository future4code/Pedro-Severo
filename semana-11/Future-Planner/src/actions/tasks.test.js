import axios from "axios";
import { createTask } from "./tasks"
import { getTasks } from "./tasks"

describe("Task Actions", () => {

    let mockDispatch;
    beforeEach(() => {
      mockDispatch = jest.fn();
    });
    
    const mockTask = {
        text: "text",
        day: "monday",
    }

    describe("CreateTask", () => {
        it("axios correct response is being handled", async () => {
            axios.post = jest.fn(() => ({
                status: 200
            }));
            
            const {text, day} = mockTask
            await createTask(text, day)(mockDispatch);
            expect(axios.post).toHaveBeenCalledWith("https://us-central1-missao-newton.cloudfunctions.net/generic/:planner-pedro", mockTask)
            expect(mockDispatch).toHaveBeenCalledTimes(1)
            expect(mockDispatch).toHaveBeenCalledWith(getTasks())
        })
    })
})
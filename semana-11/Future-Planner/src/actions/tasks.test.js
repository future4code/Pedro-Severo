import axios from "axios";
import { createTask, setTasks } from "./tasks";
import { getTasks } from "./tasks";
import { baseURL } from "../api/constants";


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
        it("axios correct response is being handled and dispatch has being called with correct action", async () => {
            axios.post = jest.fn(() => ({
                status: 200
            }));
            
            const {text, day} = mockTask
            await createTask(text, day)(mockDispatch);
            expect(axios.post).toHaveBeenCalledWith(baseURL + "pedro", mockTask)
            expect(mockDispatch).toHaveBeenCalledTimes(1)
        })
    })

    describe("SetTasks", () => {
        it("action creator is being called with a correct parameter", () => {
            const {text, day} = mockTask
            const mockTasks = [text, day]
            
            setTasks(mockTasks)
            expect(["text", "monday"]).toEqual(expect.arrayContaining(mockTasks))
        })
    })

    describe("GetTasks", () => {
        it("dispatch is being called with correct action", async () => {
            const mockTasks = [mockTask]
            
            axios.get = jest.fn(() => ({
                data: mockTasks
            }))
            
            const expectAction = {
                type: "SET_TASKS",
                payload: {
                    tasks: mockTasks
                }
            }

            await getTasks()(mockDispatch);
            expect(axios.get).toHaveBeenCalledWith(baseURL + "pedro")
            expect(mockDispatch).toHaveBeenCalledWith(expectAction)
        })
    })
})
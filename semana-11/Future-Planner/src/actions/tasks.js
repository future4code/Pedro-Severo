import axios from "axios";
import { baseURL } from "../api/constants";

export const setTasks = (tasks) => ({
    type: "SET_TASKS",
    payload: {
        tasks
    }
})

export const getTasks = () => async (dispatch) => {
    try {
        const response = await axios.get(
            baseURL + "pedro", 
        )
        dispatch(setTasks(response.data))
    } catch (e) {
        console.log("Error:", e.message);
    };
}

export const createTask = (text, day) => async (dispatch) => {
    const data = {
        text,
        day
    };
    try {
        const response = await axios.post(
            baseURL + "pedro", 
            data,
        )
        if (response.status === 200) {
            dispatch(getTasks())
        }
    } catch (e) {
        console.log("Error:", e.message);
    };
}

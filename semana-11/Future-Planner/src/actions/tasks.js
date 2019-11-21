import axios from "axios";
import { baseURL } from "../api/constants";


export const getTasks = () => {
    console.log("oi")
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

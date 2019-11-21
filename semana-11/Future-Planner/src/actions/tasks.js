import axios from "axios";
import { baseURL } from "../api/constants";


export const createTask = (text, day) => async (dispatch) => {
    const data = {
        text,
        day
    };
    
    const response = await axios.post(
        baseURL + "pedro", 
        data,
    )

    if (response.data === 200) {
        dispatch()
    }
}

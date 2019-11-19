import { push } from 'connected-react-router';
import { routes } from '../containers/Router';
import axios from "axios"

export const signUp = (username, email, password) => async (dispatch) => {
    try {
        const response = await axios.post(
            "https://us-central1-missao-newton.cloudfunctions.net/fourEddit/signup",
            {
                username,
                email,
                password
            }              
        );
        
        window.localStorage.setItem("token", response.data.token);
        dispatch(push(routes.feed));
    } catch (e) {
        console.log("Error:", e.message);        
    }
}

export const signIn = (email, password) => async (dispatch) => {
    try {
        const response = await axios.post(
            "https://us-central1-missao-newton.cloudfunctions.net/fourEddit/login",
            {
                email, 
                password,
            }
        );
        window.localStorage.setItem("token", response.data.token);
        dispatch(push(routes.feed))
    } catch (e) {
        console.log("Error", e.message)
    }
}
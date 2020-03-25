import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router/index";

export const doLogin = (email, password) => async(dispatch) => {
    try {
      const response = await axios.post(
        "https://us-central1-missao-newton.cloudfunctions.net/futureX/severo/login",
        {
          email,
          password
        }
      );
      window.localStorage.setItem("token", response.data.token);
      dispatch(push(routes.tripsList));
    } catch (e) {
      console.log("Error", e.message)
    }
}
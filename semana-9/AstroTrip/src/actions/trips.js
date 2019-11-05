import axios from "axios";

export const setTrips = tripsList => {
    return {
        type: "SET_TRIPS",
        payload: {
            tripsList: tripsList
        }
    };
};

export const getTrips = () => async (dispatch) => {
    const response = await axios.get(
        "https://us-central1-missao-newton.cloudfunctions.net/futureX/severo/trips"
    )
    
    dispatch(setTrips(response.data.trips))
}

export const getTripDetail = () => async () => {
    const response = await axios.get(
        "https://us-central1-missao-newton.cloudfunctions.net/futureX/severo/trip/NXw3cviXO0zwpG4XKN1F"
    )

    console.log(response)
}
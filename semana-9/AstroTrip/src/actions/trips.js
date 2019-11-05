import axios from "axios";

export const setTrips = tripsList => {
    return {
        type: "SET_TRIPS",
        payload: {
            tripsList: tripsList,
        }
    };
};

export const setID = (id) => {
    return {
        type: "SET_ID",
        payload: {
            id: id
        }
    }
}

export const setTripDetail = (trip) => {
    return {
        type: "SET_TRIP_DETAIL",
        payload: {
            trip: trip,
        }
    }
}

export const getTrips = () => async (dispatch) => {
    const response = await axios.get(
        "https://us-central1-missao-newton.cloudfunctions.net/futureX/severo/trips"
    )
    
    dispatch(setTrips(response.data.trips))
}

export const getTripDetail = (id) => async (dispatch) => {
    const response = await axios.get(
        `https://us-central1-missao-newton.cloudfunctions.net/futureX/severo/trip/${id}`
    )

    console.log(response)

    dispatch(setTripDetail(response.data.trip))
}
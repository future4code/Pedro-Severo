import axios from "axios";


export const getTrips = () => async () => {
    const response = await axios.get(
        "https://us-central1-missao-newton.cloudfunctions.net/futureX/severo/trips"
    )

    console.log(response)
}

export const getTripDetail = () => async () => {
    const response = await axios.get(
        "https://us-central1-missao-newton.cloudfunctions.net/futureX/severo/trips"
    )

    console.log(response)
}
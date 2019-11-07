import axios from "axios";

export const applyToTrip = (applicationForm) => async () => {
    const candidate = {
        name: applicationForm.name,
        age: applicationForm.age,
        applicationText: applicationForm.applicationText,
        profession: applicationForm.profession,
        country: applicationForm.country
    };
    console.log(candidate)
    axios.post (
        `https://us-central1-missao-newton.cloudfunctions.net/futureX/severo/trips/${applicationForm.tripId}/apply`,
        candidate,
    );
}
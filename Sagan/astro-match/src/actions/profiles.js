import axios from 'axios'


export const setProfile = (profile) => {
	return {
		type: "SET_PROFILE",
		payload: {
			profile: profile
		}
	};
};

export const getProfile = () => async (dispatch) => {
	try {
		const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/severo/person')
		dispatch(setProfile(response.data.profile));	
	} catch (e) {
		console.log(e.message)
	};
};

export const chooseProfile = (id, choice) => {
	return {
		type: "CHOOSE_PROFILE",
		payload: {
			id: id,
			choice: choice
		}
	}
};


export const clearSwipes = (id) => async (dispatch) => {
	const data = {
		id
	}
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/severo/clear', data.id)
	dispatch(getProfile())
}
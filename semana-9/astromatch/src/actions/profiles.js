import axios from 'axios'

export const clearSwipes = () => async (dispatch) => {
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/clear')
}

export const setProfiles = profile => ({
	type: 'SET_PROFILES',
	payload: {
		profile
	}
})

export const getProfiles = () => async (dispatch, getState) => {
	const response = await axios.get(
		'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person'
	)

	console.log(response)

	dispatch(setProfiles(response.data.profile))
}

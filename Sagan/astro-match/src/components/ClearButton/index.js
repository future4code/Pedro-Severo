import PropTypes from 'prop-types'
import React from 'react'
import {connect} from 'react-redux'
import {clearSwipes} from '../../actions/profiles'
import styled from 'styled-components'

const ClearButton = styled.button`
	position: fixed;
	bottom: 5px;
	right: 5px;
`

function ClearButtonWrapper(props) {
	const clearSwipes = () => {
		props.clearSwipes(props.id)
	}

	return <ClearButton onClick={clearSwipes}>Limpar swipes e matches</ClearButton>
}

ClearButtonWrapper.propTypes = {
	clearSwipes: PropTypes.func.isRequired
}


const mapStateToProps = (state) => ({
	id: state.profile.currentProfile.id
})

function mapDispatchToProps(dispatch) {
	return {
		clearSwipes: (id) => dispatch(clearSwipes(id)),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ClearButtonWrapper)

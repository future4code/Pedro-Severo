import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import UserSwipeCard from '../../components/UserSwipeCard/index';



class ProfileScreen extends React.Component {


  render() {
    return (
      <div>
        <UserSwipeCard 

        />
      </div>
    )
  }
}

ProfileScreen.propTypes = {

}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)

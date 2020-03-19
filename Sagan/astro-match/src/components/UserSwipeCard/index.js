import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  BlurredBackground,
  InfoWrapper,
  ProfilePicture,
  TitleWrapper,
  UserAge,
  UserCardWrapper,
  UserName,
} from './styled'

class UserSwipeCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentAnimation: null,
    }
  }


  render() {
    const { animationDirection: animation } = this.props

    return (
      <UserCardWrapper animation={animation}>
        <BlurredBackground photo={this.props.profile.photo}/>
        <ProfilePicture src={this.props.profile.photo}/>
        <InfoWrapper>
          <TitleWrapper>
            <UserName>{this.props.profile.name},</UserName>
            <UserAge>{this.props.profile.age}</UserAge>
          </TitleWrapper>
        </InfoWrapper>
      </UserCardWrapper>)
  }
}

export default UserSwipeCard

UserSwipeCard.propTypes = {
  userToSwipe: PropTypes.object
}
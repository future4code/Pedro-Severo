import React from "react";
import { push } from "connected-react-router";
import { routes } from "../../containers/Router/index";
import {CardFooterWrapper, ReactionButtons, StyledChatIcon, StyledCommentP, StyledThumbUp, StyledThumbDown} from "./style";
import { connect } from "react-redux";
import { vote } from "../../Actions/votes";
import { setId } from "../../Actions/post";

export class CardFooter extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
        };
    };

    componentDidMount = () => {

    }

    onClickThumbUp = (id) => {
        const directionVote = 1
        this.props.vote(directionVote, id)
    }

    onClickThumbDown = (id) => {
        const directionVote = -1
        this.props.vote(directionVote, id)
    }

    loadPostDetails = (id) => {
        this.props.setId(id);
        this.props.goToPostDetail()
    }

    render () {
        const id = this.props.id
        return (
            <CardFooterWrapper>
                <ReactionButtons>
                    <StyledThumbUp 
                        color="primary" 
                        onClick={() => {this.onClickThumbUp(id)}} 
                    />
                    <p>{this.props.votesCount}</p>
                    <StyledThumbDown
                        color="primary" 
                        onClick={() => {this.onClickThumbDown(id)}} />
                </ReactionButtons>
                <div onClick={() => {this.loadPostDetails(id)}}>
                    <StyledCommentP>
                        {this.props.commentsNumber}
                        <StyledChatIcon color="secondary"/>
                    </StyledCommentP>
                </div>
            </CardFooterWrapper>
        )
    };
};


const mapDispatchToProps = (dispatch) => ({
    vote: (directionVote, id) => {dispatch(vote(directionVote, id))},
    setId: (id) => {dispatch(setId(id))},
    goToPostDetail: () =>{dispatch(push(routes.post))}
})

export default connect (null, mapDispatchToProps)(CardFooter)
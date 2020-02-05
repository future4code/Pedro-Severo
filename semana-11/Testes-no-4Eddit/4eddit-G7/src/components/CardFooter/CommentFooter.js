import React from "react";
import {CardFooterWrapper, ReactionButtons} from "./style";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { connect } from "react-redux";
import { voteComment } from "../../Actions/votes";


export class CommentFooter extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
        };
    };


    onClickThumbUp = (commentId, postId) => {
        const directionVote = 1
        this.props.voteComment(directionVote, commentId, postId)
    };

    onClickThumbDown = (commentId, postId) => {
        const directionVote = -1
        this.props.voteComment(directionVote, commentId, postId)
    };

    render () {
        const commentId = this.props.commentId
        const postId = this.props.postId
        return (
            <CardFooterWrapper>
                <ReactionButtons>
                    <ThumbUpIcon onClick={() => {this.onClickThumbUp(commentId, postId)}} />
                        <p>{this.props.votesCount}</p>
                    <ThumbDownIcon onClick={() => {this.onClickThumbDown(commentId, postId)}} />
                </ReactionButtons>
            </CardFooterWrapper>
        )
    };
};

const mapStateToProps = (state) => ({
    postId: state.id.id,
}) 

const mapDispatchToProps = (dispatch) => ({
    voteComment: (directionVote, commentId, postId) => {dispatch(voteComment(directionVote, commentId, postId))},
})

export default connect (mapStateToProps, mapDispatchToProps)(CommentFooter)
import React from "react";
import { connect } from "react-redux";
import { PostWrapper } from "./style"
import { PostCard } from "../../components/PostCard/PostCard";
import { BoxComent } from "../../components/Coments/BoxComent";
import  ComentWritter  from "../../components/Coments/ComentWritter";
import { getPostDetail } from "../../Actions/post";


class Post extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
        };
    };

    componentDidMount = () => {
        const id = this.props.postId
        this.props.getPostDetail(id);
    }

    render () {
        const { post } = this.props
        return (
            <PostWrapper>
                <PostCard 
                    user={post.username}
                    text={post.text}
                    title={post.title}
                    id={post.id}
                    votesCount={post.votesCount}
                    commentsNumber={post.commentsNumber}
                />
                <ComentWritter />
                {post.comments && post.comments.map(comment => {
                    return <BoxComent 
                        username={comment.username}
                        text={comment.text}
                        commentId={comment.id}
                        votesCount={comment.votesCount}
                    />
                })}
            </PostWrapper>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        postId: state.id.id,
        post: state.post,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPostDetail: (id) => {dispatch(getPostDetail(id))}
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Post)
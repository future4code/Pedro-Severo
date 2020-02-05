import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/index";
import { PostContainer} from "./style";
import NewPost from "../../components/NewPost/NewPost";
import PostCard from "../../components/PostCard/PostCard"
import { getPosts } from "../../Actions/post";

class Feed extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	};

	componentDidMount = () => {
		const token = window.localStorage.getItem("token");
		if(!token) {
			this.props.goToRegister();
		}	
		this.props.getPosts();
	}

	render() {
		console.log(this.props.posts)
		return (
			<PostContainer>
				<NewPost/>
				{this.props.posts.map(post => {
					return <PostCard
								title={post.title}
								username={post.username}
								text={post.text}
								id={post.id}
								votesCount={post.votesCount}
								commentsNumber={post.commentsNumber}
						    />
				})}
			</PostContainer>
		);
	};
};

const mapStateToProps = (state) => {
	return {
		posts: state.posts
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		goToPost: () => { dispatch(push(routes.post)) },
		getPosts: () => { dispatch(getPosts()) },
		goToRegister: () => { dispatch(push(routes.register)) }
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Feed)
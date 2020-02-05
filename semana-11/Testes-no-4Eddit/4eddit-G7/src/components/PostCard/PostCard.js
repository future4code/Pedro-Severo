import React from "react";
import CardFooter from "../CardFooter/CardFooter";
import { TitleContainer, PostCardContainer, HeaderPost, TextContainer, TextItem, } from "./style"

export function PostCard(props) {
	return (
		<PostCardContainer>
			<HeaderPost>
				<TextItem>{props.username}</TextItem>
			</HeaderPost>
			<TitleContainer>
				<TextItem>{props.title}</TextItem>
			</TitleContainer>
			<TextContainer>
				<TextItem>{props.text}</TextItem>
			</TextContainer>
			<CardFooter 
				id={props.id}
				votesCount={props.votesCount}
				commentsNumber={props.commentsNumber}
			/>
		</PostCardContainer>
	)
}
export default PostCard;
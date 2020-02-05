import React from "react";
import CommentFooter from "../CardFooter/CommentFooter"
import {
    BoxComentWrapper, BoxComentHeader, BoxComentText
}
from "./style"

export function BoxComent(props) {
    return (
        <BoxComentWrapper>
            <BoxComentHeader>{props.username}</BoxComentHeader>
            <BoxComentText>{props.text}</BoxComentText>
            <CommentFooter 
                commentId={props.commentId}
                votesCount={props.votesCount}
            />
        </BoxComentWrapper>
    )
}

export default (BoxComent)
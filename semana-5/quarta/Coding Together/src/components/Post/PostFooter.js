import React from "react";
import { PostAction } from "./PostAction";
import styled from "styled-components";

const FooterContainer = styled.div`
  padding: 5px;
  display: flex;
  justify-content: space-between;
  height: 40px;
`;
const FavoriteIcon = require("../../img/favorite.svg");
const FavoriteWhiteIcon = require("../../img/favorite-white.svg");
const CommentIcon = require("../../img/comment.svg");

export function PostFooter(props) {
  return (
    <FooterContainer>
      <PostAction
        icone={props.curtidoPorMim ? FavoriteIcon : FavoriteWhiteIcon}
        numero={props.numeroCurtidas}
        onClick={props.curtirPost}
      />
      <PostAction icone={CommentIcon} numero={props.numeroComentarios} />
    </FooterContainer>
  );
}

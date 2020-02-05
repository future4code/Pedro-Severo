import axios from "axios"
import { getPosts, getPostDetail } from "./post"

export const vote = (directionVote, id) => async (dispatch) => {
    const data = {
        direction: directionVote
    }
    const token = window.localStorage.getItem("token");
    try {
        await axios.put(
            `https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/${id}/vote`,
            data,
            {
                headers: {
                    auth: token
                }
            }
        );
    } catch (e) {
        console.log("Error:", e.message);
    }
    dispatch(getPosts())
}

export const voteComment = (directionVote, commentId, postId) => async (dispatch) => {
    const data = {
        direction: directionVote
    }
    const token = window.localStorage.getItem("token");
    try {
        await axios.put(
            `https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/${postId}/comment/${commentId}/vote`,
            data,
            {
                headers: {
                    auth: token
                }
            }
        );
    } catch (e) {
        console.log("Error:", e.message);
    }
    dispatch(getPostDetail(postId))
}
import axios from "axios"

export const setPosts = (postsList) => {
    return {
        type: "SET_POSTS",
        payload: { postsList: postsList }
    };
};

export const setPostDetail = (postDetail) => {
    return {
        type:"SET_POST_DETAIL",
        payload: { postDetail: postDetail }
    }
}

export const getPosts = () => async (dispatch) => {
    const token = window.localStorage.getItem("token");
    try {
        const response = await axios.get(
            "https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts",
            {
                headers: {
                    auth: token
                }
            }
        );
        dispatch(setPosts(response.data.posts))
    } catch (e) {
        console.log("Error:", e.message);
    };
};

export const createPost = (text, title) => async (dispatch) => {
    const data = {
        text,
        title
    }
    const token = window.localStorage.getItem("token");
    try {
        await axios.post(
            "https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts",
            data,
            {
                headers: {
                    auth: token
                }
            }
        );
    } catch (e) {
        console.log("Error:", e.message);
    };
    dispatch(getPosts());
};

export const setId = (postId) => {
    return {
        type: "SET_ID",
        payload: { postId }
    }
}

export const getPostDetail = (id) => async (dispatch) => {
    const token = window.localStorage.getItem("token");
    try {
        const response = await axios.get(
            `https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/${id}`,
            {
                headers: {
                    auth: token
                }
            }
        );
        dispatch(setPostDetail(response.data.post))
    } catch(e) {
        console.log("Error:", e.message);
    };
}


export const createComment = (text, postId) => async (dispatch) => {
    console.log(text, postId)
    const data = {
        text: text
    }
    const token = window.localStorage.getItem("token");
    try {
        await axios.post(
            `https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/${postId}/comment`,
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
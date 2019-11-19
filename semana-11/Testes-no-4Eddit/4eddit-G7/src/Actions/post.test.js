import { 
    setPosts, 
    setPostDetail, 
    getPosts, 
    createPost, 
    setId, 
    getPostDetail, 
    createComment,
} from "./post";
import axios from "axios";

jest.mock('axios');

const mockPostList = {
    commentsNumber: 1,
    createdAt: 2,
    id: "id",
    text: "text",
    title: "title",
    userVoteDirection: -1,
    username: "username",
    votesCount: 2,
}

const mockPostDetail = {
    votesCount: 1,
    userVoteDirection: -1,
    id: "id",
    username: "username",
    text: "text",
    createdAt: 1
}

describe ("Post Actions-Creators", () => {
    it("Set Posts", () => {
        const expectedResult = {
            type: "SET_POSTS",
            payload: {
                postsList: mockPostList,
            }
        };
        const result = setPosts(mockPostList);
        expect(expectedResult).toMatchObject(result);
    })

    it("Set Posts Detail", () => {
        const expectedResult = {
            type: "SET_POST_DETAIL",
            payload: {
                postDetail: mockPostDetail,
            }
        };
        const result = setPostDetail(mockPostDetail);
        expect(expectedResult).toMatchObject(result);
    })

    it("Set id posts", () => {
        const expectedResult = {
            type: "SET_ID",
            payload: {
                postId: "id"
            }
        }
        const result = setId("id");
        expect(expectedResult).toMatchObject(result)
    })

    it("Get Posts", async () => {
        axios.get = jest.fn();
        const mockedDispatch = jest.fn();

        expect(axios.get).toHaveBeenCalledWith('https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts', {
            headers: {
                auth: null
            }
        })
    })
})
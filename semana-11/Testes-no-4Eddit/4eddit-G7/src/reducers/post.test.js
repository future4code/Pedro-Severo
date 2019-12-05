import postsReducer from "./post";

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

describe("Post Reducer Testing", () => {
    it("Post Reducer", () => {
        const testAction = {
            type: "SET_POSTS",
            payload: {
                postList: mockPostList
            }
        }

        const newState = postsReducer(undefined, testAction)
        expect(newState).toHaveLength(1);
        expect(newState[0].text).toBe("text")
    })
})
import {idReducer} from "./id";

const mockInitialState = {
    id: "",
}

describe("Id Reducer Testing", () =>{
    it("idReducer", () => {
        const testAction = {
            type: "SET_ID",
            payload: {
                postId: "id"
            }
        }

        const newState = idReducer(mockInitialState, testAction);
        expect(newState).toMatchObject(testAction.payload);
        expect(newState.id).toBe("id")
    })
})
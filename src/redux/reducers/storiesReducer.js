import { SET_STORY } from "../actions/storiesActions";

const initialState = {
    selectedStory: null,
};

const storyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STORY:
            return {
                ...state,
                story: action.payload??null
            };
        default:
            return state;
    }
};

export default storyReducer;


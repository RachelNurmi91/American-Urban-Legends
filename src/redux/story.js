import { createSlice } from "@reduxjs/toolkit";

export const storySlice = createSlice({
    name: "story",
    initialState: {
        selectedStory: ''
    },
    reducers: {
        setStory: (state, action) => {
            state.selectedStory = action.payload??null
        }
    }
});

export const { setStory } = storySlice.actions;

export default storySlice.reducer;
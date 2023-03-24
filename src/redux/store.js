import { configureStore } from '@reduxjs/toolkit';
import storyReducer from './story';

export default configureStore({
    reducer: {
        story: storyReducer
    }
});

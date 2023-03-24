import { combineReducers } from 'redux';
import { STORIES } from '../../shared/Stories';
import storyReducer from './storiesReducer';

export default combineReducers({
    stories: STORIES,
    story: storyReducer,
});
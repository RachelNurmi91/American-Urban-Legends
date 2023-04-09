import { useState, useRef } from "react";
import Banner from './Banner'
import HomeContent from './HomeContent';
import MidwestRow from './Row_Midwest';
import Northeast from './Row_Northeast';
import SoutheastRow from './Row_Southeast';
import SouthwestRow from './Row_Southwest';
import WestRow from './Row_West';
import StoryModal from "./StoryModal";
import { FEATURED_STORIES } from "../shared/FeaturesStories";


const Home = () => {
    const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
    const selectedStory = useRef(null);

    const toggleStoryModal = () => {
        setIsStoryModalOpen(!isStoryModalOpen);
    };

    const sendStoryToState = (story) => {
        selectedStory.current = story;
        toggleStoryModal();
    };

    const fetchSummary = (region) => {
        const storyList = FEATURED_STORIES.map((story, i) => {
            if (story.region === region) {
                return (
                    <div className="col-md-4 featured-story-box" key={i} onClick={() => sendStoryToState(story.id)}>
                        <h5>{story.title}</h5>
                        <p className="mb-2">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis tristique sagittis arcu vel laoreet. Nulla et tristique nibh. Proin vitae lectus faucibus, imperdiet urna id, interdum neque.</p>
                        <a href="#" className="a-continue" onClick={() => sendStoryToState(story.id)}>READ MORE <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M14 12l-14 9v-18l14 9zm-4-9v4l8.022 5-8.022 5v4l14-9-14-9z" fill="#ffffbb"/></svg></a>
                    </div>
                )
            }
        })
        return storyList;
    };


    return (
        <>
            <div id='home'>
                <Banner />
                <HomeContent sendStoryToState={sendStoryToState}/>
                <Northeast sendStoryToState={sendStoryToState} fetchSummary={fetchSummary}/>
                <MidwestRow sendStoryToState={sendStoryToState} fetchSummary={fetchSummary}/>
                <WestRow sendStoryToState={sendStoryToState} fetchSummary={fetchSummary}/>
                <SouthwestRow sendStoryToState={sendStoryToState} fetchSummary={fetchSummary}/>
                <SoutheastRow sendStoryToState={sendStoryToState} fetchSummary={fetchSummary}/>
            </div>

            <StoryModal isStoryModalOpen={isStoryModalOpen} toggleStoryModal={toggleStoryModal} selectedStory={selectedStory.current}/>
        </>
    )

};

export default Home;
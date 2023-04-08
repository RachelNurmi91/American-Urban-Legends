import { useState, useRef } from "react";
import Banner from './Banner'
import HomeContent from './HomeContent';
import MidwestRow from './MidwestRow';
import Northeast from './NortheastRow';
import SoutheastRow from './SoutheastRow';
import SouthwestRow from './SouthwestRow';
import WestRow from './WestRow';
import StoryModal from "./StoryModal";
import { STORIES } from "../shared/Stories";


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
        const storyList = STORIES.map((story, i) => {
            if (story.region === region) {
                return (
                    <div className="col-md-4 featured-story-box" key={i} onClick={() => sendStoryToState(story.id)}>
                        <h5>{story.title}</h5>
                        <p className="mb-0">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis tristique sagittis arcu vel laoreet. Nulla et tristique nibh. Proin vitae lectus faucibus, imperdiet urna id, interdum neque.</p>
                        <a href="#" className="a-continue" onClick={() => sendStoryToState(story.id)}>...</a>
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
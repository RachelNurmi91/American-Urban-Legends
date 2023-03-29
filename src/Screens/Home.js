import { useState, useRef } from "react";
import Banner from './Banner'
import HomeContent from './HomeContent';
import Midwest from './Midwest';
import Northeast from './Northeast';
import Southeast from './Southeast';
import Southwest from './Southwest';
import West from './West';
import StoryModal from "./StoryModal";
import { STORIES } from "../shared/Stories";


const Home = () => {
    const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
    const selectedStory = useRef(null);

    const toggleStoryModal = () => {
        console.log('HIT')
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
                    <div className="col-4 text-center" key={i}>
                        <h6>{story.title}</h6>
                        <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis tristique sagittis arcu vel laoreet. Nulla et tristique nibh. Proin vitae lectus faucibus, imperdiet urna id, interdum neque.</p>
                        <button type="button" className="btn btn-outline-primary" onClick={() => sendStoryToState(story.id)}>Primary</button>
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
                <Midwest sendStoryToState={sendStoryToState} fetchSummary={fetchSummary}/>
                <West sendStoryToState={sendStoryToState} fetchSummary={fetchSummary}/>
                <Southwest sendStoryToState={sendStoryToState} fetchSummary={fetchSummary}/>
                <Southeast sendStoryToState={sendStoryToState} fetchSummary={fetchSummary}/>
            </div>

            <StoryModal isStoryModalOpen={isStoryModalOpen} toggleStoryModal={toggleStoryModal} selectedStory={selectedStory.current}/>
        </>
    )

};

export default Home;
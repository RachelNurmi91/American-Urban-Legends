import { useState, useRef } from "react";
import Banner from './Banner'
import HomeContent from './HomeContent';
import Midwest from './Midwest';
import Northeast from './Northeast';
import Southeast from './Southeast';
import Southwest from './Southwest';
import West from './West';
import StoryModal from "./StoryModal";

const Home = () => {
    const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
    const selectedStory = useRef(null);

    const toggleStoryModal = () => {
        console.log('HIT')
        setIsStoryModalOpen(!isStoryModalOpen);
    }

    const sendStoryToState = (story) => {
        selectedStory.current = story;
        toggleStoryModal();
    }


    return (
        <>
            <div id='home'>
                <Banner />
                <HomeContent sendStoryToState={sendStoryToState}/>
                <Northeast sendStoryToState={sendStoryToState}/>
                <Midwest sendStoryToState={sendStoryToState}/>
                <West sendStoryToState={sendStoryToState}/>
                <Southwest sendStoryToState={sendStoryToState}/>
                <Southeast sendStoryToState={sendStoryToState}/>
            </div>

            <StoryModal isStoryModalOpen={isStoryModalOpen} toggleStoryModal={toggleStoryModal} selectedStory={selectedStory.current}/>
        </>
    )

};

export default Home;
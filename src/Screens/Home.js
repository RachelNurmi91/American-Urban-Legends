import { useState, useRef, useContext, useEffect } from "react";
import { BannerContext } from "./Contexts/BannerContext";
import Welcome from "./Welcome";
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
    
    const { setShowFullBanner } = useContext(BannerContext)
    
    useEffect(() => {
        setShowFullBanner(true)

        return () => {
            setShowFullBanner(false)
        }
    }, [])

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
                    <div className="col-md-4 p-3 story-box" key={i} onClick={() => sendStoryToState(story.id)}>
                        <h5 className="summary-story-title">{story.title}</h5>
                        <p className="mb-2">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis tristique sagittis arcu vel laoreet. Nulla et tristique nibh. Proin vitae lectus faucibus, imperdiet urna id, interdum neque.</p>
                        <a href="#" className="a-continue" onClick={() => sendStoryToState(story.id)}>Continue...</a>
                    </div>
                )
            }
        })
        return storyList;
    };


    return (
        <>
            <div>
                <Welcome sendStoryToState={sendStoryToState}/>
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
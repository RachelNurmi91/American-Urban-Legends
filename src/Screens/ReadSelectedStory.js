import { useEffect, useContext, useLayoutEffect } from 'react';
import { BannerContext } from './Contexts/BannerContext';
import 'bootstrap/dist/css/bootstrap.css';
import { useParams } from 'react-router-dom';
import { STORIES } from '../shared/Stories';

const ReadSelectedStory = () => {
    const { id } = useParams();
    const { storyData, setStoryData } = useContext(BannerContext)

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    useEffect(() => {
        findStory();
    },[id]);

    
    const findStory = () => {
        let foundStory = STORIES.filter(obj => id === obj.id);

        if (foundStory) {
            setStoryData(foundStory)
        }
    };

    return (
        <>
            { storyData ?
                <div className="solid content-story">
                    <h5 className="text-center">{storyData?.[0]?.orgin}</h5>
                    {storyData?.[0]?.story}
                </div>
                :
                <div className='solid'> LOADING</div> 
            }
        </>
        
    );

};

export default ReadSelectedStory;
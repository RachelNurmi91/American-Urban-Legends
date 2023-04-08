import { useEffect, useState, useLayoutEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useParams } from 'react-router-dom';
import { LIST_STORIES } from '../shared/ListStories';

const ReadSelectedStory = () => {
    const [storyData, setStoryData] = useState({});

    const { id } = useParams();

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    useEffect(() => {
        let foundStory = LIST_STORIES.filter(obj => id === obj.id);

        if (foundStory) {
            console.log(foundStory)
            setStoryData(foundStory)
        }
    },[id]);

    return (
        <div className="solid content-story">
            <h1 className="text-center pb-0">{storyData?.[0]?.title}</h1>
            <h5 className="text-center">{storyData?.[0]?.orgin}</h5>
            {storyData?.[0]?.story}
        </div>
    );

};

export default ReadSelectedStory;
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useParams } from 'react-router-dom';
import { LIST_STORIES } from '../shared/ListStories';

const ReadSelectedStory = () => {
    const [storyData, setStoryData] = useState({})

    const { id } = useParams()

    useEffect(() => {
        let foundStory = LIST_STORIES.filter(obj => id === obj.id);

        if (foundStory) {
            console.log(foundStory)
            setStoryData(foundStory)
        }
    },[id])


    return (
        <div className="solid">
            <h1>{storyData?.[0]?.title}</h1>
            <h5>{storyData?.[0]?.orgin}</h5>
            <p>{storyData?.[0]?.story}</p>
        </div>
    )

};

export default ReadSelectedStory;
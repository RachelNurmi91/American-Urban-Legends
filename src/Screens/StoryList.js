import { useLayoutEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { STORIES } from '../shared/Stories';
import 'bootstrap/dist/css/bootstrap.css';

const StoryList = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    const location = useLocation();
    const { title } = location.state;

    const listOutAllRegionStories = () => {

        const regionList = STORIES.filter( story => story.region.toLowerCase() === title.toLowerCase() )
        
        const fullStoryList = regionList.map((story, i) => {
            return (
                <div className="col-md-4 text-center px-3 py-5 content-story-list" key={i}>
                    <h6>{story.title}</h6>
                    <p>{story.summary}</p>
                    <Link to={story.id}>Read More</Link>
                </div>
            )
        })
        return fullStoryList;
    };
    
    return (
        <div className="solid p-4">
            <h1 className="text-center">{title}</h1>

            <div className="container">
                <div className="row">
                    {listOutAllRegionStories()}
                </div>
            </div>
            

        </div>
    )

};

export default StoryList;
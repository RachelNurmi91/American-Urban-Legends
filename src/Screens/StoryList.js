import { useLayoutEffect, useEffect, useContext } from 'react';
import { BannerContext } from './Contexts/BannerContext';
import { useLocation, Link } from 'react-router-dom';
import { STORIES } from '../shared/Stories';
import 'bootstrap/dist/css/bootstrap.css';

const StoryList = () => {

    const { setHideBanner } = useContext(BannerContext)

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    useEffect(() => {
        setHideBanner(true)

        return () => {
            setHideBanner(false)
        }
    }, [])

    const location = useLocation();
    const { title } = location.state;

    const listOutAllRegionStories = () => {

        const regionList = STORIES.filter( story => story.region.toLowerCase() === title.toLowerCase() )
        
        const fullStoryList = regionList.map((story, i) => {
            return (
                <div className="col-md-4 text-center px-3 py-4 content-story-list story-box my-3 py-5" key={i}>
                    <h5>{story.title.toUpperCase()}</h5>
                    <p>{story.summary}</p>
                    <Link to={story.id} className=" button-to-story a-continue btn-bottom ">READ STORY</Link>
                </div>
            )
        })
        return fullStoryList;
    };
    
    return (
        <div className="solid content-list">
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
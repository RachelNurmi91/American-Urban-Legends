import { STORIES } from "../shared/Stories";

const Northeast = ({ sendStoryToState }) => {

    const storyList = STORIES.map((story, i) => {
        if (story.region === 'northeast') {
            return (
                <div className="col-4" key={i}>
                    <h4>{story.title}</h4>
                    <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis tristique sagittis arcu vel laoreet. Nulla et tristique nibh. Proin vitae lectus faucibus, imperdiet urna id, interdum neque.</p>
                    <button type="button" className="btn btn-outline-primary" onClick={() => sendStoryToState(story.id)}>Primary</button>
                    
                </div>
            )
        }
    })

    return (
        <>
            <div id='northeast' className='content-main trans'>
                <h1 className='text-center'>Northeast</h1>
                <div className='mt-4'>
                    <div className="container">
                        <div className="row">
                            {storyList}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

};

export default Northeast;
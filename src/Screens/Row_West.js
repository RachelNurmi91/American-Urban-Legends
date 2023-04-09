import { Link } from 'react-router-dom';

const WestRow = ({ fetchSummary }) => {

    return (
        <>
            <div id='west' className='content-main trans'>
                <h1 className='text-center reigion-title'>West</h1>
                <div className='mt-4'>
                    <div className="container">
                        <div className="row">
                            {fetchSummary('west')}
                        </div>
                        <div className="row">
                            <div className="text-center mt-4">
                                <Link to="west" state={{ title: 'West'}} className='button-to-region px-5'>Visit the West</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

};

export default WestRow;
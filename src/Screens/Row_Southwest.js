import { Link } from 'react-router-dom';

const SouthwestRow = ({ fetchSummary }) => {

    return (
        <>
            <div id='southwest' className='content-main solid'>
                <h1 className='text-center reigion-title'>Southwest</h1>
                <div className='mt-4'>
                    <div className="container">
                        <div className="row">
                            {fetchSummary('southwest')}
                        </div>
                        <div className="row">
                            <div className="text-center mt-5 pt-3">
                                <Link to="southwest" state={{ title: 'Southwest'}} className='button-to-region px-5'>Visit the Southwest</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

};

export default SouthwestRow;
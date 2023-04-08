import { Link } from 'react-router-dom';

const SoutheastRow = ({ fetchSummary }) => {

    return (
        <>
            <div id='southeast' className='content-main trans'>
                <h1 className='text-center reigion-title'>Southeast</h1>
                <div className='mt-4'>
                    <div className="container">
                        <div className="row">
                            {fetchSummary('southeast')}
                        </div>
                        <div className="row">
                            <div className="text-center mt-4">
                                <Link to="/region/southeast" className='button-to-region px-5'>Visit the Southeast</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

};

export default SoutheastRow;
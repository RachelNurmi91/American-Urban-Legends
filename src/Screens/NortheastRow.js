import { Link } from "react-router-dom";

const NortheastRow = ({ fetchSummary }) => {

    return (
        <>
            <div id='northeast' className='content-main trans'>
                <h1 className='text-center reigion-title'>Northeast</h1>
                <div className='mt-4'>
                    <div className="container">
                        <div className="row">
                            {fetchSummary('northeast')}
                        </div>
                        <div className="row">
                            <div className="text-center mt-4">
                                <Link to="/region/northeast" className='nav-link'>Visit the Northeast</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

};

export default NortheastRow;
import { Link } from "react-router-dom";

const MidwestRow = ({ fetchSummary }) => {

    return (
        <>
            <div id='midwest' className='content-main solid'>
                <h1 className='text-center reigion-title'>Midwest</h1>
                <div className='mt-4'>
                    <div className="container">
                        <div className="row">
                            {fetchSummary('midwest')}
                        </div>
                        <div className="row">
                            <div className="text-center mt-4">
                                <Link to="midwest" state={{ title: 'Midwest'}} className='button-to-region px-5'>Visit the Midwest</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

};

export default MidwestRow;
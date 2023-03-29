const Southwest = ({ fetchSummary }) => {

    return (
        <>
            <div id='southwest' className='content-main solid'>
                <h1 className='text-center reigion-title'>Southwest</h1>
                <div className='mt-4'>
                    <div className="container">
                        <div className="row">
                            {fetchSummary('southwest')}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

};

export default Southwest;
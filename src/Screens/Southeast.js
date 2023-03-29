const Southeast = ({ fetchSummary }) => {

    return (
        <>
            <div id='southeast' className='content-main trans'>
                <h1 className='text-center reigion-title'>Southeast</h1>
                <div className='mt-4'>
                    <div className="container">
                        <div className="row">
                            {fetchSummary('southeast')}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

};

export default Southeast;
const Northeast = ({ fetchSummary }) => {

    return (
        <>
            <div id='northeast' className='content-main trans'>
                <h1 className='text-center'>Northeast</h1>
                <div className='mt-4'>
                    <div className="container">
                        <div className="row">
                            {fetchSummary('northeast')}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

};

export default Northeast;
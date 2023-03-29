const Midwest = ({ fetchSummary }) => {

    return (
        <>
            <div id='midwest' className='content-main solid'>
                <h1 className='text-center reigion-title'>Midwest</h1>
                <div className='mt-4'>
                    <div className="container">
                        <div className="row">
                            {fetchSummary('midwest')}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

};

export default Midwest;
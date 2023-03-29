const West = ({ fetchSummary }) => {

    return (
        <>
            <div id='west' className='content-main trans'>
                <h1 className='text-center reigion-title'>West</h1>
                <div className='mt-4'>
                    <div className="container">
                        <div className="row">
                            {fetchSummary('west')}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

};

export default West;
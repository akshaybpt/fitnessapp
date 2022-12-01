import React from 'react'

const ExerciseVideos = (props) => {
    const { exerciseVideos, name } = props
    return (
        <div>
            <h1>Watch <span style={{ color: 'red' }}>{name} </span>related video</h1>
            <div className="row my-3">

                {exerciseVideos?.slice(0, 6)?.map((item, index) => (
                    <div className="col-md-4" key={index}>
                        <a href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                            target="_blank"
                            rel="noreferrer">
                            <div className="exercise-video mx-2">

                                <img style={{ borderTopLeftRadius: '20px' }} className="img-fluid" src={item.video.thumbnails[0].url} alt={item.video.title} />
                                <div className='container'>
                                    <p sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#000">
                                        {item.video.title}
                                    </p>
                                    <p fontSize="14px" color="#000">
                                        {item.video.channelName}
                                    </p>
                                </div>

                            </div>
                        </a>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default ExerciseVideos
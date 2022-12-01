import React from 'react';
import img from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <div>
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6 col-12 d-flex justify-content-center align-self-center ">
                    <div className='mt-5 text-center '>
                    <h1 className='banner-title'>Fitness Club</h1>
                    <p className='my-3 fs-3'>
                    Sweat, Smile 
                    <br />
                    and Repeat
                    <br />
                   check out most effective exercise
                    </p>
                   
                    <button type="button" className="btn btn-danger my-2 fs-2">Exercises</button>
                    </div>
                    
                </div>
                <div className="col-md-6">
                    <img src={img} alt="banner"  className='img-fluid banner-img' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner
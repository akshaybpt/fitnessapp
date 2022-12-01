import React from 'react';
import logo from '../assets/icons/gym.png'

const BodyPartExercise = (props) => {
    const { element, bodypartClicked,imgr} = props
    const handelClick = () => {
        // // console.log("clicled " + element);
        bodypartClicked(element);
       
    }
   
     // console.log(imgr);
    return (
        <div>
            <div className="card m-2 " onClick={handelClick} style={{ height: '200px', width: '200px' }}>
                <div className="card-body text-center partCard  ">
                    <img src={logo} alt={element} className='img-fluid mb-2' style={{ height: '50px', width: '50px' }} />
                    <p className='text-capitalize fw-semibold fs-4 mt-2'style={{color:'#444'}}> {element} </p>
                </div>
            </div>

        </div>
    )
}

export default BodyPartExercise
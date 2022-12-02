import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ExerciseItem = (props) => {
    const navigate=useNavigate();
    const { bodyPart, equipment, gifUrl, name, target ,id,setId } = props;
const handelClick=()=>{
setId(id);
// console.log("clicked");
navigate(`/exercise/${id.toString()}`)
}
    return (
        <div>
            <div className="card my-2 " style={{ borderTop: '5px solid red' }} onClick={handelClick} >
                <img src={gifUrl} className="card-img-top img-fluid" alt="..." style={{ height: "250px" }} />
                <div className="card-body">
                    <Link className="card-title text-capitalize fs-3 fw-semibold " to ={`/exercise/${id.toString()}`} style={{ color: 'red' }}> {name}</Link>
                    <br />
                    <p className="btn m-2 exerciseBtn text-capitalize"  > {target} </p>
                    <p className="btn m-2 exerciseBtn text-capitalize"  > {bodyPart} </p>
                    <p className="btn m-2 exerciseBtn text-capitalize"  >   {equipment} </p>

                </div>
            </div>

        </div>
    )
}

export default ExerciseItem
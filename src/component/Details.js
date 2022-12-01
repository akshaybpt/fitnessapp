import React from 'react';
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Details = ({ exerciseDeatils }) => {
  const { gifUrl, name, target, bodyPart, equipment } = exerciseDeatils;

  return (
    <div>
      <div className="row mt-4">
        <div className="col-md-6">
          <img src={gifUrl} alt="" style={{ width: '100%' }} />
        </div>
        <div className="col-md-6">
          <h1 className='text-capitalize'  style={{ color :'red' }}>{name}</h1>
          <p className='fs-5'>
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you improve your{' '}
          <br /> mood and gain energy.
          </p>
          <br />
          <p className='my-4'> <img src={BodyPartImage} alt="" /> {bodyPart} </p>
          <p className='my-4'> <img src={TargetImage} alt="" /> {target} </p>
          <p className='my-4'> <img src={EquipmentImage} alt="" /> {equipment} </p>
        </div>
      </div>
    </div>
  )
}

export default Details
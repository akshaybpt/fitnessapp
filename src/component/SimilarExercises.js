import React from 'react';
import ExerciseItem from './ExerciseItem';

const SimilarExercises = (props) => {
    const { equipmentExercises } = props
    return (
        <div className='row'>
            {!equipmentExercises.length===0 &&  <h1> Similar Equipment Exercise </h1>}
            
            {equipmentExercises?.slice(2, 5)?.map((element) => {
                return <div className='col-md-4' key={element.id} >
                   
                    <ExerciseItem name={element.name} bodyPart={element.bodyPart} id={element.id} equipment={element.equipment} gifUrl={element.gifUrl} target={element.target} />
                </div>
            })}


        </div>
    )
}

export default SimilarExercises
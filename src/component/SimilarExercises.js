import React from 'react';
import ExerciseItem from './ExerciseItem';

const SimilarExercises = (props) => {
    const { equipmentExercises, tagertExercises } = props
    return (
        <>
        <div className='row'>
            {!equipmentExercises.length===0 &&  <h1> Similar Equipment Exercise </h1>}
            
            <h1> Similar <span style={{color : 'red'}}>Equipment</span> Exercise </h1>
            {equipmentExercises?.slice(2, 5)?.map((element) => {
                return <div className='col-md-4 my-3' key={element.id} >
                   
                    <ExerciseItem name={element.name} bodyPart={element.bodyPart} id={element.id} equipment={element.equipment} gifUrl={element.gifUrl} target={element.target} />
                </div>
            })}



        </div>
        <div className='row'>
            
            {!tagertExercises.length===0 &&  <h1> Similar Target Exercise </h1>}
            
            <h1> Similar <span style={{color : 'red'}}>Target</span> Exercise </h1>
            {equipmentExercises?.slice(6, 9)?.map((element) => {
                return <div className='col-md-4 my-3' key={element.id} >
                   
                    <ExerciseItem name={element.name} bodyPart={element.bodyPart} id={element.id} equipment={element.equipment} gifUrl={element.gifUrl} target={element.target} />
                </div>
            })}



        </div>
        </>
    )
}

export default SimilarExercises
import React, { useEffect, useState } from 'react'
import { options, youtubeOptions } from '../utils/fetch';
import { useParams } from 'react-router-dom';
import Details from '../component/Details';
import ExerciseVideos from '../component/ExerciseVideos';
import SimilarExercises from '../component/SimilarExercises';


const Exercise = () => {

  let { id } = useParams();
  const [exerciseDeatils, setExerciseDeatils] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const url = 'https://exercisedb.p.rapidapi.com/exercises';
  const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
  useEffect(() => {
    exerciseDetailsData();
    
    // eslint-disable-next-line 
  }, [])
  const exerciseDetailsData = async () => {
    const response = await fetch(`${url}/exercise/${id}`, options);
    const data = await response.json();
    console.log(data);
    setExerciseDeatils(data);
    await exerciseVideosData();
  }

  const exerciseVideosData = async () => {
    const response = await fetch(`${youtubeSearchUrl}/search?query=${exerciseDeatils.name} exercise`, youtubeOptions);
    const data1 = await response.json();
    console.log(data1);
    setExerciseVideos(data1.contents);

    await equimentExercisesData();
 
  }
  const equipment =exerciseDeatils.equipment
  console.log(equipment)
  
  const equimentExercisesData = async () => {
    const response = await fetch(`https://exercisedb.p.rapidapi.com/exercises/equipment/${equipment}`, options);
    const data3 = await response.json();
    console.log(data3);
   setEquipmentExercises(data3);
  }

  
 
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <Details exerciseDeatils={exerciseDeatils} />
          <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDeatils.name} />
          
          <SimilarExercises equipmentExercises={equipmentExercises} />
        </div>
      </div>
      <h2>

      </h2>
    </div>
  )
}

export default Exercise
import React, { useEffect, useState } from 'react'
import { options, youtubeOptions } from '../utils/fetch';
import { useParams } from 'react-router-dom';
import Details from '../component/Details';
import ExerciseVideos from '../component/ExerciseVideos';
import SimilarExercises from '../component/SimilarExercises';
import Spinner from '../component/Spinner';


const Exercise = () => {

  let { id } = useParams();
  const [exerciseDeatils, setExerciseDeatils] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const [tagertExercises, setTagertExercises] = useState([]);
  const [loading, setLoading] = useState(false);
  const [equipment, setEquipment] = useState('')
  const [target, setTarget] = useState('')

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
    console.log(data.equipment)
    setEquipment(data.equipment);
    setTarget(data.target);
    console.log('equipment has been set');
    await exerciseVideosData();
  }

  const exerciseVideosData = async () => {
    setLoading(true);
    const response = await fetch(`${youtubeSearchUrl}/search?query=${exerciseDeatils.name} exercise`, youtubeOptions);
    const data1 = await response.json();
    console.log(data1);
    setLoading(false);
    setExerciseVideos(data1.contents);

    await equimentExercisesData();

  }


  const equimentExercisesData = async () => {

    console.log(equipment);
    setLoading(true);
    const response = await fetch(`${url}`, options);
    const data = await response.json();
    // // console.log(data);

    const searchedData = data.filter((item) =>
      item.equipment.toLowerCase().includes(equipment)

    );
    // // console.log(searchedData);
    setLoading(false);
    setEquipmentExercises(searchedData);
    await targetExercisesData();
  }

  const targetExercisesData = async () => {
    console.log(target);
    setLoading(true);
    const response = await fetch(`${url}`, options);
    const data = await response.json();
     //console.log(data);
    const searchedData = data.filter((item) =>
      item.target.toLowerCase().includes(target)
    );
     console.log(searchedData);
    setLoading(false);
    setTagertExercises(searchedData);
    console.log(tagertExercises.length);

  }



  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <Details exerciseDeatils={exerciseDeatils} />
          {loading === true && <Spinner />}
          <div className="my-3" >
          <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDeatils.name} />
          <SimilarExercises equipmentExercises={equipmentExercises} tagertExercises={tagertExercises} />
          </div> 
        </div>
      </div>
      
    </div>
  )
}

export default Exercise
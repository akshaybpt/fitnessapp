import React, { useState, useEffect } from 'react';
import ExerciseItem from './ExerciseItem';
import { options } from '../utils/fetch';
import BodyPartExercise from './BodyPartExercise';
import HorizontalScroll from './HorizontalScroll';
import Spinner from './Spinner';


const SearchExercise = () => {

  const useInitial = []
  const body = []
  const url = 'https://exercisedb.p.rapidapi.com/exercises'

  const [search, setSearch] = useState('')
  const [exercise, setExercise] = useState(body);
  const [bodyPart, setBodyPart] = useState(useInitial);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    bodyExercise();
    // eslint-disable-next-line
  }, [])

  const bodyExercise = async () => {
    const response = await fetch(`${url}/bodyPartList`, options);
    const data = await response.json();
    console.log(data);
    setBodyPart(data);
  }


  const bodypartClicked = (item) => {
    apiResponse(item);
  }

  const apiResponse = async (item) => {
    setLoading(true);
    const response = await fetch(`${url}/bodyPart/${item}`, options);
    const data = await response.json();
    // // console.log(data);
    setLoading(false);
    setExercise(data);

  }
  const handelChange = (e) => {
    // // console.log("change")
    setSearch(e.target.value)
  }
  const handelSubmit = (e) => {
    e.preventDefault();
    fetchApiResponse();
    setSearch('');
  }
  const fetchApiResponse = async () => {
    setLoading(true);
    const response = await fetch(`${url}`, options);
    const data = await response.json();
    // // console.log(data);

    const searchedData = data.filter((item) =>
      item.name.toLowerCase().includes(search)
      || item.target.toLowerCase().includes(search)
      || item.equipment.toLowerCase().includes(search)
      || item.bodyPart.toLowerCase().includes(search),
    );
    // // console.log(searchedData);
    setLoading(false);
    setExercise(searchedData);

  }

  const setId = (id) => {
    // // console.log("id has been set" + id);
  }
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>  Awesome Exercises You <br /> Should Know</h1>
            <form className="d-flex" role="search" onSubmit={handelSubmit} >
              <input className="form-control me-2" type="search" placeholder="Search" onChange={handelChange} aria-label="Search" />
              <button className="btn btn-outline-danger" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
      <div className="container">

        <HorizontalScroll bodyPart={bodyPart} bodypartClicked={bodypartClicked} />
       
      </div>
      <div className="container my-4">
        <h1>Showing Results </h1>
        <div className="row">

          {exercise.length === 0 && <h2 style={{ color: 'red' }}> Nothing to show </h2>}
          {loading === true && <Spinner />}
          {exercise.map((element) => {
            return <div className='col-md-4' key={element.id} >
              <ExerciseItem name={element.name} bodyPart={element.bodyPart} id={element.id} setId={setId} equipment={element.equipment} gifUrl={element.gifUrl} target={element.target} />
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default SearchExercise
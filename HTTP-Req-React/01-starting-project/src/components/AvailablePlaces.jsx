import { useState } from 'react';
import { useEffect } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import {sortPlacesByDistance} from '../loc.js'
import {fetchAvailablePlaces} from '../http.js'

export default function AvailablePlaces({ onSelectPlace }) {
  const[isFetching, setIsFetching] = useState(false);
  const[availablePlaces, setAvailablePlaces] = useState([]);
  const[error, setError] = useState([]);

  useEffect(()=>{

    async function fetchPlaces(){
      setIsFetching(true);
      try{
       //400 or 500 
      navigator.geolocation.getCurrentPosition(()=>{ 
        const sortedPlaces = sortPlacesByDistance
        (resData.places, 
        position.coords.latitude,
        position.coords.longitude);
        setAvailablePlaces(sortedPlaces);
        setIsFetching(false);
      });
    
    }
    catch(error){
      setError({message:error.message || 'Couldnt fetch Places, Please try again later!'});
      setIsFetching(false);
    }


      
    
    }
    // .then(
    //   (response)=>{
    //     return response.json()
    //   }
    // ).then((resData)=>{
    
    // });
    fetchPlaces();
  },[])

  if(error){
    return <Error title='An Error Occurred' message={error.message}></Error>
  }

  return (
    <Places 
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText = 'Fetching Places...'
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}

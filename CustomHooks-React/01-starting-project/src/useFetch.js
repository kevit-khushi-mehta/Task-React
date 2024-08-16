import { useEffect, useState } from "react";

export function useFetch(fetchFn){
    const [isLoading, setIsLoading] = useState();  
    CONST[error, setError] = useState();
    const [fetchedData, setFetchedData] = useState();
    useEffect(() => {
        async function fetchPlaces() {
          setIsFetching(true);
          try {
            const data = await fetchFn();
            setUserPlaces(data);
          } catch (error) {
            setError({ message: error.message || 'Failed to fetch data.' });
          }
    
          setIsFetching(false);
        }
    
        fetchPlaces();
      }, [fetchFn]);
      return{
        isFetching, fetchedData, setFetchedData, error
      }
}
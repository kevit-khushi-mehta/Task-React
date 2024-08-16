// import { Link } from "react-router-dom";
// const DUMMY_EVENTS = [
//     {
//     id: 'e1', 
//     title: 'Some Event',
//     },
//     {
//         id: 'e2',
//         title: 'Another Event'
//     },
//     {

//     }
// ]

// function EventsPage() {

//     return (
//     <>
//     <h1>EventsPage</h1>
//     <ul>
//         {DUMMY_EVENTS.map(event => <li key={event.id}><Link to={`/events/${event.id}`}>{event.title}</Link></li>)}
//     </ul>
//     </>
//     );
// }
// export default EventsPage;



// import { useEffect, useState } from 'react';
import { useLoaderData, json } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
    const data = useLoaderData();
    const events = data.events;

    if(data.isError){
      return <p>{data.message}</p>
    }
//   const [isLoading, setIsLoading] = useState(false);
//   const [fetchedEvents, setFetchedEvents] = useState();
//   const [error, setError] = useState();

//   useEffect(() => {
//     async function fetchEvents() {
//       setIsLoading(true);
     
//       setIsLoading(false);
//     }

//     fetchEvents();
//   }, []);
  return (
    
       <EventsList events={events} />
    
  );
}

export default EventsPage;
 
export async function loader() {
  const response = await fetch('http://localhost:8080/events');

        if (!response.ok) {
          // return {isError: true, message: 'Could not fetch events.'};
          return json({message: 'Could not fetch events.'}, {status: 500,});
          // throw new Response(JSON.stringify({message: 'Could not fetch events'}), {status: 500,});
        } else {
          // const resData = await response.json();
          return response;
         
}
}

//       <div style={{ textAlign: 'center' }}>
// {isLoading && <p>Loading...</p>}
// {error && <p>{error}</p>}
// </div>
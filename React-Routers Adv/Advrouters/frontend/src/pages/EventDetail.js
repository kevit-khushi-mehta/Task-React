import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";
function EventDetailPage() {
    const data = useRouteLoaderData('event-detail');

    return (
        <EventItem event={data.event}/>
    );
}
export default EventDetailPage;

export async function loader({request, params}) {
    const id = params.eventID;
   const response = await fetch('http://localhost:8080/events/' +id);

   if(!response.ok) {
    throw json({message: 'Could not delete event'}, {
        status: 500
    })
   }
   else {
    return response;
   }
}

export async function action ({params}) {
    const eventID = params.eventID;
    const response = await fetch('http://localhost:8080/events/' + eventID)
    if(!response.ok) {
        throw json({message: 'Could not delete event'}, {
            status: 500
        })
       }
       return redirect('/events');
}
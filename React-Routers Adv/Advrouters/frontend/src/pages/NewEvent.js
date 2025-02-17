import EventForm from "../components/EventForm";
import { json } from "react-router-dom";
function NewEventPage() {

    return <EventForm />
}
export default NewEventPage;

export async function action({request, params}) {
    const data = await request.formData();
    const eventData = {
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description: data.get('description'),
    }
    const response = await fetch('http://localhost:8080/events', {
        method: 'POST',
        body: JSON.stringify(eventData),
        headers:{
            'content-Type' : 'application/json'
        },
    });

    if(!response.ok){
        throw json({message: 'Could not save event.'}, {status: 500 });
    }
} 
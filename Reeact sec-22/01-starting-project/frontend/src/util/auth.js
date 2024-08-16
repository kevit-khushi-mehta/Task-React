import { redirect } from "react-router-dom";
export function getTokenDuration() {
    const expirationDate = localStorage.getItem
}
export function getAuthToken(){
    const token = localStorage.getItem('token');
    return token;
}
// export default getAuthToken;

export function tokenLoader() {
return getAuthToken();
}

export function checkAuthLoader() {
    const token = getAuthToken();

if(!token) {
    return redirect('/auth');
}
}
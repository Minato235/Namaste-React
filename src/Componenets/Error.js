import { useRouteError } from "react-router-dom";
const Error=()=>{
const error=useRouteError();
console.log(error)
return (
<div>
    <h1>Oops Error</h1>
    <h4>{error.data}</h4>
    <h4>{error.status}:{error.statusText}</h4>

</div>
)}
export default Error;
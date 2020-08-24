import React ,{useState, useEffect}from 'react';
import Loader from '../Loader/Loader';
import './Error.css';
const Error=()=>{
    const[error,setError]=useState(false);

    useEffect(()=>{
       setError(true);
    },[])
    return(
        <div id="error-container">
            {
               error===true?
            <div>
            
            <h3>Error: Something went wrong</h3>
            </div>:
           <Loader/>
            }
        </div>

    );
}
export default Error;
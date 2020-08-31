import React ,{ useEffect}from 'react';

import './Error.css';
const Error=(props)=>{
   
   const {error} = props;
    useEffect(()=>{
   
    },[])
    console.log(error);
    return(
        <div id="error-container">
            {
               error===true?
            <div>
            
            <h3>Error: Something went wrong</h3>
            </div>:
           null
            }
        </div>

    );
}
export default Error;

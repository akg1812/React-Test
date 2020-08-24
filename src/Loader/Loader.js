import React from 'react';
import Spinner from '../Loader/Spinner.gif';
const Loader=()=>{
    return(
    <div>
       <img src={Spinner} alt="loading"/> 
    </div>

    );
};

export default Loader;
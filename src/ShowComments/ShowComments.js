import React, { useState,useEffect } from 'react';
import "./ShowComments.css";
import Axios from 'axios';
import Loader from '../Loader/Loader.js';
import Error from '../Error/Error.js';


const url="https://jsonplaceholder.typicode.com/comments?postId=1";

const ShowComments = (props) => {

    const[comments,setComments]=useState(null);
    const[activeTab,setActiveTab]=useState(1);
    const[error, setError] = useState(true);
    useEffect(()=>{
    try{
        Axios.get(url)
    
    
    .then((response)=>{
        (setComments(response.data));
        console.log(response);
    })
        .catch((error)=>{
            setError(true);
        })
        throw new Error("Something went Wrong");
}
catch(e)
{
    // <div><Loader/></div>
    // <div><Error/></div>
     console.log(" wrong");
}
       },[])

    
       const{tabData}=props

       const tabChanged=(clickedTab)=>{
             if(clickedTab!==activeTab){
            
             setActiveTab(clickedTab);
         }
       };
    
    
    return error ? <Error error = {error}></Error> : (
        
        
        
        <div id="comment-container">
            
            {
                   comments === null?
                   <div>
                       <h2>
                        
                        <Loader/>
                        
                           
                           
                           
                       </h2>
                    </div>:
                     <ul>
                 
                    {
                    
                    comments.map(comments => ( 
                            <li key={comments.body}
                            onClick={()=>tabChanged(tabData.label)}
                            className={activeTab===tabData ? "tab active":"tab"}>
                            {comments.body}</li>
                    
                    ))}
                   
                   

                    
                    </ul> 
            } 
        </div>
    );
}
export default ShowComments;

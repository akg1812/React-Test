import React, { useState,useEffect } from 'react';
import "./ShowComments.css";
import Axios from 'axios';
import Loader from '../Loader/Loader.js';
import Error from '../Error/Error.js';


const url="https://jsonplaceholder.typicode.com/comments?postId=1";
const ShowComments = (props) => {


    const[comments,setComments]=useState(null);
    const[activeTab,setActiveTab]=useState(1);
    useEffect(()=>{
        Axios.get(url)
    
    .then((response)=>{
        (setComments(response.data));
        console.log(response);
    })
        .catch((error)=>{})
       },[])


       const{tabData}=props

       const tabChanged=(clickedTab)=>{
             if(clickedTab!==activeTab){
            
             setActiveTab(clickedTab);
         }
       };
    

    return (
        
        
        
        <div id="comment-container">
            {
                comments === null ?
                   <div>
                       <h2>
                        
                           <Loader/>
                           
                           
                           
                       </h2>
                    </div>:
                     <ul>
                    <Error/>
                   
                   

                    
                    </ul> 
            } 
        </div>
    );
}
export default ShowComments;
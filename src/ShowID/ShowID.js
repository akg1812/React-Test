
import React ,{useState} from 'react';
import Loader from '../Loader/Loader.js';

import "./showID.css"


const ShowID=(props)=>{
  const[activeTab,setActiveTab]=useState(0);
  //const[ids,setIds]=useState();

 const {tabData}=props;


const{ids}=props

const tabChanged=(clickedTab)=>{
      if(clickedTab!==activeTab){
     //handleTabChanged(api);
      setActiveTab(clickedTab);
  }
};


return(
    <div id="id-container">
        {
            (!ids)?
            // <h2>Loading....</h2>
            <Loader/>
    :<div>
        
    
    
        <ul className="container">
            
           
            {ids.map((ids)=>(
                <li 
                key ={ids}
                onClick={()=>tabChanged(tabData)}
                 className={activeTab===tabData.label? "tab active":"tab"}
                >{ids.id}{tabData.label}</li>
            ))}
            
            
            
        </ul>
       
    </div>
    
}
    </div>

)
}

export default ShowID;

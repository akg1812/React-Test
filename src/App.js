import React,{useState,useEffect} from 'react';
import axios from 'axios';
import ShowID from './ShowID/ShowID';
import ShowPosts from './ShowPosts/ShowPosts';
import ShowComments from './ShowComments/ShowComments';
import './App.css';

export default function App(){
  const [ids, setIds] = useState(null);
  const[activeTab,setActiveTab]=useState( {label:"Ids", component: ShowID});
  const tabChanged=(clickedTab)=>{
  
    if(clickedTab.label!==activeTab.label){
  
    setActiveTab(clickedTab);
  }
  };
  const tabData=[
    {label:"Ids", component: ShowID},
    {label:"Posts", component: ShowPosts},
    {label:"Comments", component: ShowComments}
  ];

  useEffect(()=>{

  
  const handleTabIds=()=>{
   axios.get("https://jsonplaceholder.typicode.com/users")
   .then((response)=>{
     setIds(response.data);
     console.log(response);
   })
  

}


handleTabIds();
},[]);




  
  console.log(activeTab);
  const ActiveTabComponent = activeTab.component;
  return(
  <div className="App">  
     <ul className="tabs">
            
           
            {tabData.map((tab)=>(
                <li 
                onClick={()=>tabChanged(tab)}
                 className={activeTab.label===tab.label? "tab active":"tab"}
                >{tab.label}</li>
            ))}
            
            
            
      </ul>
           <ActiveTabComponent ids={ids} tabData={tabData}/>

  </div>

  )
}

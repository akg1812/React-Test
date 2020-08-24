import React, { useState,useEffect} from 'react';
import "./ShowPosts.css";
import Axios from 'axios';

import Loader from '../Loader/Loader.js';

const url="https://jsonplaceholder.typicode.com/posts?userId=1";
const ShowPosts = (props) => {

    const{tabData}=props;
const[posts,setPosts]=useState(null);
const[activeTab,setActiveTab]=useState(1);

useEffect(()=>{
        Axios.get(url)
    
    .then((response)=>{
        (setPosts(response.data));
        console.log(response);
    })
},[])

const tabChanged=(clickedTab)=>{
    if(clickedTab!==activeTab){
        setActiveTab(clickedTab);
    }
};
console.log(posts);
return (
    

        <div id="post-container">
           
            {
                posts === null ?
                    <div>
                        {/* <h2>Loading posts...</h2> */}
                        <Loader/>
                    </div>:
                    <ul>
                        {posts.map(post => (
                            <li 
                            key={post.title}
                            onClick={()=>tabChanged(tabData)}
                            className={activeTab===tabData ? "tab active":"tab"}
                            >{post.title}</li>
                    
                        ))}
                    
                    </ul> 
            } 
        </div>
    );



}

export default ShowPosts;






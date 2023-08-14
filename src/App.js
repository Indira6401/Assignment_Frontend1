import { useState,useEffect,useCallback } from "react";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

import Sidebar from './components/Sidebar';
import Content from "./components/Content";

function App() {
    const  [user,setUser] = useState([]) //[] is an empty array where as {} is an object
    const [isLoading , setIsLoading] = useState(false)
    const [error ,setError] = useState(null)
    const [menuItem , setMenuItem] = useState('dashboard');

    const fetchMovieHandler= useCallback( async () => {
      setIsLoading(true)
      setError(null)
      const randomUser = Math.floor(Math.random() * 10) + 1
      try{
        await fetch(`https://jsonplaceholder.typicode.com/users/${randomUser}`)
      .then( response => {

    if(!response.ok){
      setIsLoading(false) 
      throw new Error('Something Went Wrong!') ;
   }
     return response.json();


    })

  .then ((responseData) =>{
      console.log(responseData)
      const userData = { 
        'id' : responseData.id,
        'name' : responseData.name,
        'email' : responseData.email
      }
      console.log(userData) 
      setIsLoading(false) 
      setUser(userData)
  })
}
catch(error){
  setError(error.message);
}
 } , [] )

 useEffect( () => {
  fetchMovieHandler();
},[fetchMovieHandler])

const getMenuItem = (item) => {
    setMenuItem(item)
}
  
  return (
    <>
    {isLoading  && <p><strong>Loading...</strong></p>}
    {error && <p>{error}</p>}
    {!error && !isLoading && <div class="wrapper">
    <div class="section">
    <div class="top_navbar">
    <nav class="user-nav">
    <div class="notification_icon"><span><i className="bi bi-bell-fill"></i></span></div>
      <img class="user-img" src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg" alt="profile_picture"/>
      </nav>
    </div>
   <div class="container">
 {user === null && <p>No Users to show currently or please refresh for details</p>}
    <Content menuItem={menuItem} userDetails={user}/>
    </div>
 </div>
    {user!=null  && <Sidebar userDetails={user} menuItem={getMenuItem}/>}
  </div>
    }
    </>
  );
}

export default App;

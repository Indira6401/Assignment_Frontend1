import { useState,useEffect,useCallback } from "react";
import Blog from "./Blog";

const Blogs = (props) => {

    const [blogData,setBlogData] = useState([]) //[] is an empty array where as {} is an object
    const [isLoading , setIsLoading] = useState(false)
    const [error ,setError] = useState(null)
    const id = props.userId;

    const fetchMovieHandler= useCallback( async () => {
      setIsLoading(true)
      setError(null)
      
      try{
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then( response => {

    if(!response.ok){
      setIsLoading(false) 
      throw new Error('Something Went Wrong!') ;
   }
     return response.json();


    })

  .then ((responseData) =>{
      console.log(responseData)
      const blogData = responseData.map(data => { 
        return {
          'id' : data.id,
        'title' : data.title,
        'body' : data.body
        }
      })
      console.log(blogData) 
      setIsLoading(false) 
      setBlogData(blogData)
  })
}
catch(error){
  setError(error.message);
}
 } , [id] )

 useEffect( () => {
  fetchMovieHandler();
},[fetchMovieHandler])

return (
     <>
    {isLoading  && <p><strong>Loading...</strong></p>}
    {error && <p>{error}</p>}
    {!error && !isLoading && blogData === null && <p>No Blogs to show currently for the user.Please refresh</p>}
    {blogData!=null  && <Blog blogData={blogData}/>}
    </>
  );
 }
 
 
 export default Blogs;
import blogImage from '../images/blogImage.webp'
import classes from './Blog.module.css'


const Blog = (props) => {
  
return (
    <>
    <h3>All Posts</h3>
    {props.blogData.map((blog)=> (
        <li className={classes.blog} key={blog.id}>
        <div>
            <img src={blogImage} className={classes.img} alt="BlogImage"></img>
         </div>
         <div>
         <p>{blog.title}</p>
         <p>{blog.body}</p>
         </div>
     </li>
    ))
     }
     </>
)


}

export default Blog;

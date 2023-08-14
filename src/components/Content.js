import Dashboard from "./Dashboard";
import Blogs from "./Blogs";
const Content = (props) => {
    var menuItem = props.menuItem.toLowerCase();
  return(
    <>
    {menuItem === "dashboard" && <Dashboard userData={props.userDetails}/>}
    {menuItem === "blogs" && <Blogs userId={props.userDetails.id}/>}
    </>
  )

}

export default Content;
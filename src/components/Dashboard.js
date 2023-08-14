import classes from './Dashboard.module.css'

const Dashboard = (props) => {

    const userDetails = props.userData

   return (
    <div className={classes.userDiv}>
     <p><h4>Name:</h4> {userDetails.name}</p> 
     <p><h4>Email:</h4>{userDetails.email}</p>
    </div>
   )
}

export default Dashboard;
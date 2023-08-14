import './Sidebar.css'
const Sidebar = (props) => {

    const menuItemListner = (event) => {
        const menuItem = event.target.innerText;
        props.menuItem(menuItem)
    }

  return (

        <div class="sidebar">
            <div class="profile">
                <img src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg" alt="profile_picture"/>
                <p>Hello</p>
                <h3>{props.userDetails.name}</h3>
                
            </div>
            <ul>
                <li>
                    <button value="dashboard" onClick={menuItemListner}><span class="icon"><i className='bi bi-speedometer nav_icon'></i></span>
                     <span class="item">Dashboard</span></button>
                   
                </li>
                <li>
                    <button onClick={menuItemListner}><span class="icon"><i class="bi bi-menu-up nav_icon"></i></span>
                    <span class="item">Blogs</span>
                    </button>
                </li>
                
            </ul>
        </div>
    );
};

export default Sidebar;

import { Link } from "react-router-dom";

const Sidebar=()=>{
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary sidebar" style={{width: "280px"}}> 
            <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"> 
                <svg className="bi pe-none me-2" width="40" height="32" aria-hidden="true"><use xlinkHref="#bootstrap"></use></svg> 
                <span className="fs-4">Social-Media</span> 
            </Link> 
            <hr/> 
            <ul className="nav nav-pills flex-column mb-auto"> 
                <li className="nav-item" onClick={()=> {console.log("Home clicked");}}> 
                    <Link to="/" className="nav-link link-body-emphasis" aria-current="page"> 
                    <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true"><use xlinkHref="#home"></use></svg>
                    Home</Link> 
                </li> 
                 <li className="nav-item" onClick={()=> {console.log("Create post clicked");}}> 
                    <Link to="/create-post" className='nav-link link-body-emphasis'> <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true"><use xlinkHref="#speedometer2"></use></svg>    
                    Create Post</Link> 
                </li> 
                <li className="nav-item" onClick={()=> {console.log("Dashboard clicked");}}> 
                    <Link to="/" className='nav-link link-body-emphasis'> <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true"><use xlinkHref="#speedometer2"></use></svg>    
                    Dashboard</Link> 
                </li> 
                <li className="nav-item" onClick={()=> {console.log("Order clicked");}}> 
                    <Link to="/" className='nav-link link-body-emphasis'> <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true"><use xlinkHref="#table"></use></svg>
                    Orders</Link> 
                </li> 
                <li className="nav-item" onClick={()=> {console.log("Products clicked");}}> 
                    <Link to="/" className='nav-link link-body-emphasis'> <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true"><use xlinkHref="#grid"></use></svg>
                    Products</Link> 
                </li> 
                <li className="nav-item"> 
                    <Link to="/" className='nav-link link-body-emphasis'> 
                        <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true"><use xlinkHref="#people-circle"></use></svg>
                        Customers</Link> 
                </li> 
            </ul> 
            <hr/>
            <div className="dropdown"> <a href="#" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/> <strong>mdo</strong> </a> 
                <ul className="dropdown-menu text-small shadow"> 
                    <li><Link className="dropdown-item" to="#">New project...</Link></li> 
                    <li><Link className="dropdown-item" to="#">Settings</Link></li> 
                    <li><Link className="dropdown-item" to="#">Profile</Link></li> 
                    <li><hr className="dropdown-divider"/></li>   
                    <li><Link className="dropdown-item" to="#">Sign out</Link></li> 
                </ul> 
            </div> 
        </div>
    )
}   

export default Sidebar;
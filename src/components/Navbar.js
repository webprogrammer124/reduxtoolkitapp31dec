import React from 'react'
import{
    BrowserRouter as BrowserRouter,
    Switch,
    Route,
    Link
}from "react-router-dom";
import Home from './Home';
import Post from './Post';
import Addpost from './Addposts'


function Navbar() {
    return (
        <div>
           <Router>
               <nav className="">
                   <link className="link" to='/'>Home</link>
                   <link className="link" to='/posts'>Posts</link>
                   <link className="link" to='/todos'>Add Posts</link>
               </nav>
               <Switch>
                   <Route path='/post'><Post/></Route>
                   <Route path='/addposts'><Addposts/></Route> 
                   <Route path='/'><Home/></Route>  
               </Switch>
               
               </Router> 
        </div>
    )
}

export default Navbar

import React,{Component,Suspense} from 'react';
import{Route,NavLink,Switch} from 'react-router-dom'

// import Users from '../Users/Users';
import Welcome from '../Courses/Courses';
// import Courses from '../welcome/Welcome';
import './handler.css'

const Users = React.lazy(()=>import('../Users/Users'));
const Courses = React.lazy(()=>import('../Courses/Courses'));

class Handler extends Component{

    render(){
        return(
            <div className="Handler">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink
                                    to="/"
                                    exact
                                    activeStyle={{
                                        color:'orange',
                                        fontWeight:'bold'
                                    }}
                                > Welcome 
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/users"
                                    exact
                                    activeStyle={{
                                        color:'orange',
                                        fontWeight:'bold'
                                    }}
                                > Users 
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/courses"
                                    exact
                                    activeStyle={{
                                           color:'orange',
                                           fontWeight:'bold'
                                    }}
                                > Courses 
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/users" exact 
                            render={()=>{
                                return(
                                    <Suspense fallback={(<div>Loading...</div>)}>
                                    <Users />
                                    </Suspense>
                                )
                            }}  />
                    <Route path="/courses" exact 
                           render={()=>{
                               return(
                                   <Suspense fallback={(<div>Loading...</div>)}>
                                   <Courses />
                                   </Suspense>
                               )
                           }}
                    />
                    <Route path="/" exact component={Welcome}  />
                </Switch>
            </div>
        )
    }
}

export default Handler;
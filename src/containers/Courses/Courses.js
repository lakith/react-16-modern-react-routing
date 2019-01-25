import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import './Courses.css';
import Course from './../Course/Course';

export const COURSE_DATA = [
    { id: 1, title: 'Angular - The Complete Guide' },
    { id: 2, title: 'Vue - The Complete Guide' },
    { id: 3, title: 'PWA - The Complete Guide' }
]
class Courses extends Component {
    state = {
        courses: COURSE_DATA
    }

    clickHandler = (id)=>{
        console.log(this.props);
        this.props.history.push({pathname:'/courses/'+1})
    }

    render () {
        

        return (
            <div>
                <h1>Amazing Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map(course => {
                            return (
                            <article className="Course" key={course.id} >
                            {course.title}
                            <br />
                            {console.log(course.id)}
                            <button style={{marginTop:'5px'}} onClick={()=>this.clickHandler(course.id)} >Click to View</button>
                            </article>
                            )
                        } )
                    }
                </section>
            </div>
        );
    }
}

export default Courses;
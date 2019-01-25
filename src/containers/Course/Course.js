import React, { Component } from 'react';
import {COURSE_DATA} from './../Courses/Courses'

class Course extends Component {

    state ={
        content : null
    }

    componentDidMount(){
        // console.log("printing content "+this.state.content);
        //     console.log("printing params id "+this.props.match.params.id);
        //     console.log("printing content id "+this.state.content.id)
        //this.updateData();
        
    }

    componentDidUpdate(){
        // console.log("printing content "+this.state.content);
        //     console.log("printing params id "+this.props.match.params.id);
        //     console.log("printing content id "+this.state.content.id)
       // this.updateData();
        
    }

    updateData = () =>{

        if(this.props.match.params.id){
            let id = +(this.props.match.params.id)-1;
            // console.log("printing content "+this.state.content);
            // console.log("printing params id "+this.props.match.params.id);
            // console.log("printing content id "+this.state.content.id)
            if(!this.state.content || (this.state.content && this.state.content.id !== id)){
                let index = +(this.props.match.params.id)-1;
                let data = COURSE_DATA[index];
                this.setState({
                    content:data
                })
            }

        }
    }

    render () {
        console.log("ewew "+this.props.content)
        let body = null;
        // if(this.state.content){
        //    body = ( 
        //        <>
        //         <h1>{this.state.content.tittle}</h1>
        //         <p>Great course to follow</p>
        //        </>
        //     )
        // } else {
            body = ( 
                <>
                 <h1>Invalied Id</h1>
                </>
             )
       // }

        return (
            
            <div>
                    {body}
            </div>
        );
    }
}

export default Course;
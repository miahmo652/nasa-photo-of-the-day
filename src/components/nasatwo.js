import React from "react";


const NasaTwo = props => {
   
if (props.data){
    return(<div>
        <h2>{props.data.title}</h2>
        <p>{props.data.date}</p>
        <p>{props.data.explanation}</p> 
        <img className = "pic" src={props.data.url} alt = "of the day"/>
    </div>)
} else {
    return <div>loading</div>
}
    
}
export default NasaTwo;
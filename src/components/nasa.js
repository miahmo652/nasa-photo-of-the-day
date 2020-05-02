import React, {useState, useEffect} from "react";
import axios from "axios";
import Nasatwo from "./nasatwo.js";
import {Style} from "./styled.js";

export default function Nasa(){
    const[mydata, setmydata] = useState();
    useEffect(()=>{
        axios.get("https://api.nasa.gov/planetary/apod?api_key=FUSyenej8uEdlAg3MRqCd5KBerRL4almXZAZrduz")
        .then(response=>{
            console.log(response.data)
    setmydata(response.data)
        })
        .catch(err => {
            console.log(err);
        });
    }, [])
    
   
   return (<Style>
    
 <Nasatwo
 data={mydata}/>
 </Style>
   )
}
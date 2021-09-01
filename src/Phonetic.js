import React from "react";
import "./Phonetic.css";

export default function Phonetic(props){
    console.log(props.phonetic);
    return (
        <div className="Phonetic">
           <a href={props.phonetic.audio} target="_blank" rel="noreferrer"><i class="far fa-play-circle"></i></a> {""}
           [{props.phonetic.text}]
        </div>);
}
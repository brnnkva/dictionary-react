import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import Photos from "./Photos";
import "./Results.css";

export default function Results(props){
    if (props.results){
        return (
            <div className="Results">
                <section> 
                <h1>{props.results.word}</h1>
                {props.results.phonetics.map(function(phonetic, index) {
                    return (
                        <div key={index}>
                            <Phonetic phonetic={phonetic} />
                         </div>
                    )
                })}
                </section>
                <section>
                <Photos  photos={props.photos}/>
                </section>
                 {props.results.meanings.map(function(meaning, index) {
                     // return meaning.definitions[0].definition;
                     return (
                         <section key={index}>   
                          <Meaning meaning={meaning}   />
                        </section>
                     )
                 })}
            </div>
        );
    } else{
        return null;
    }
}
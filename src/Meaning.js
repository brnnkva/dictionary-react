import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";


export default function Meaning(props){
return(
    <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function(definition, index) {
          return (
              <div key={index}>
                  <div className="definition">
                      {definition.definition}
                  </div>
                  <div className="examples">
                     {definition.example}
                  </div>
                  <Synonyms synonyms={definition.synonyms} />
            </div>      
          )
      })}
    </div>
)
}

// <div className="definition">
// {props.meaning.definitions[0].definition}
// </div>
// <div className="example">
 //  {props.meaning.definitions[0].example}.
// </div> 
import React from "react";

export default function Meaning(props){
console.log(props.meaning);
return(
    <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function(definition, index) {
          return (
              <div key={index}>
                  <div className="definition">
                      <p>
                      {definition.definition}
                      </p>
                  </div>
                  <div className="examples">
                     <em>
                      {definition.example}
                     </em>
                  </div>
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
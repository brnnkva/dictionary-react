import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    

    function handleResponse(response){
        setResults(response.data[0]);
        // console.log(response.data[0].meanings[0].definitions[0].definition);
    }

    function search(){
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
   }

   function handleSubmit(event){
     event.preventDefault();
     search();
   }

   function handleKeywordChange(event){
       setKeyword(event.target.value);
   }

   function  load(){
       setLoaded(true);
       search();
   }

    if (loaded){
        return (
            <div className="Dictionary">
                <form onSubmit={handleSubmit}>
                    <input type="search" autoFocus="off" onChange={handleKeywordChange} />
                </form>
                <div className="hint">
                 get definitions, synonyms, and examples of usage
                </div>
                <Results results={results}/>
            </div>
        )
    } else {
      load();
      return null;
    }
    
}
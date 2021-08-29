import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");

    function handleRespose(response){
        console.log(response.data[0]);
    }

    function search(event){
    event.preventDefault();
    alert (`Searching for ${keyword} definition`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleRespose);
   }

   function handleKeywordChange(event){
       setKeyword(event.target.value);
   }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} />
            </form>
        </div>
    )
}
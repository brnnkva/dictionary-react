import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);
    

    function handleDictionaryResponse(response){
        setResults(response.data[0]);
        // console.log(response.data[0].meanings[0].definitions[0].definition);
    }

    function handlePexelsResponse(response){
        setPhotos(response.data.photos)
    }

    function search(){
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey="563492ad6f917000010000013c380011c6454c0ca82d350be8dee7e4";
    let pexelsApiUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=4`
    let headers = { Authorization : `Bearer ${pexelsApiKey}` }
    axios.get(pexelsApiUrl, { headers: headers}).then(handlePexelsResponse);

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
                <Results results={results} photos={photos}/>
            </div>
        )
    } else {
      load();
      return null;
    }
    
}
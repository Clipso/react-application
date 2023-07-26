import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export default function Definition() {
    const [word, setWord] = useState();
    let { search } = useParams();

    useEffect(() => {
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + search)
            .then(res => res.json())
            .then(data => {
                setWord(data[0].meanings);
                console.log(data[0].meanings)
            }
            );
    }, []);
    return (
        <div>
            <h1>Here is a Definition:</h1>
            {word ? word.map((meaning, index) => {
                return (
                    <div key={uuidv4()}>
                        <h2>{meaning.partOfSpeech}</h2>
                        <h3>{meaning.definitions[0].definition}</h3>
                        <h4>{meaning.definitions[0].example}</h4>
                    </div>
                )})
            : "Loading..."}
        </div>
    )
}

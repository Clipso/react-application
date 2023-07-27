import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import NotFound from "../components/NotFound";
import DefinitionSearch from "../components/DefinitionSearch";

export default function Definition() {
    const [word, setWord] = useState([]);
    const [notFound, setNotFound] = useState(false);
    let { search } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + search)
            .then(res => {
                console.log(res.status);
                if (res.status === 404) {
                    setNotFound(true);
                    throw new Error("Word not found");
                }
                return res.json();
            })
            .then(data => {
                if (data.length > 0 && data[0].meanings) {
                    setWord(data[0].meanings);
                } else {
                    setNotFound(true);
                    navigate('/404');
                    throw new Error("Invalid API response");
                }
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    if (notFound === true) {
        return <NotFound />;
    }

    return (
        <div>
            {word.length > 0 ? <>
                <h1>Here is the definition of:</h1>
                {word.map((meaning, index) => (
                    <div key={uuidv4()}>
                        <h2>{meaning.partOfSpeech}</h2>
                        <h3>{meaning.definitions[0].definition}</h3>
                        <h4>{meaning.definitions[0].example}</h4>
                    </div>
                ))}
                <div className="flex flex-col mt-10">
                    <p>Search again:</p>
                    <DefinitionSearch />
                    <Link to="/dictionary">Back to Dictionary</Link>
                </div>
                </>
            : "Loading..."}
            
        </div>
    )
}

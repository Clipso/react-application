import { useState, useEffect } from 'react'

function Dictionary() {
    const [ word, setWord ] = useState('');

    useEffect(() => {
        console.log('Dictionary', word);
    });

  return (
    <>
        <input type="text" value={word} onChange={e => setWord(e.target.value)} />
        <h1>let's get the definition of {word}</h1>
    </>
  );
}

export default Dictionary
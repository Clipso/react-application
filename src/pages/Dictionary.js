import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dictionary() {
  const [ word, setWord ] = useState('');
  const navigate = useNavigate();
    
  return (
    <>
        <input type="text" value={word} onChange={e => setWord(e.target.value)} />
        <button onClick={() => navigate(`/definition/${word}`, { replace: true })}>Search</button>

    </>
  );
}

export default Dictionary
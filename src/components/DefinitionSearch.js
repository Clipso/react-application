import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DefinitionSearch() {
    const [ word, setWord ] = useState('');
  const navigate = useNavigate();
    
  return (
    <form
        className="" 
        onSubmit={() => navigate(`/dictionary/${word}`)}
        >
        <input
            className="shrink min-w-0 px-1 py-1 rounded focus:bg-white hover:bg-black focus:border-white hover:border-black" 
            type="text" 
            placeholder='Funny' 
            value={word} 
            onChange={e => setWord(e.target.value)} 
            />
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4'>Search</button>
    </form>
  );
}
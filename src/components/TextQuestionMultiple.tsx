import { useState, useRef, useEffect } from 'react';
import NextButton from "./NextButton";

interface Props {
    onNext?: (queries: string[]) => void;
}

const TextQuestionMultiple: React.FC<Props> = ({ onNext }) => {
  const [queries, setQueries] = useState<string[]>([]);
  const [currentQuery, setCurrentQuery] = useState<string>('');

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleAddQuery = () => {
    if (currentQuery.trim() !== '') {
      setQueries(prevQueries => [currentQuery.trim(), ...prevQueries]);
      setCurrentQuery('');
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  const handleDeleteQuery = (index: number) => {
    setQueries(prevQueries => {
      const updatedQueries = [...prevQueries];
      updatedQueries.splice(index, 1);
      return updatedQueries;
    });
    setTimeout(() => {
      inputRef.current.focus();
    }, 0);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleAddQuery();
    }
  };

  return (
    <div className="p-4">
      <div className="flex mb-4">
        <input
          ref={inputRef}
          value={currentQuery}
          onKeyDown={handleKeyDown}
          disabled={queries.length >= 5}
          onChange={e => setCurrentQuery(e.target.value)}
          placeholder="Enter a query/topic"
          className="flex-grow p-2 mr-2 placeholder:text-gray-300 border border-gray-300 rounded bg-transparent
           focus:outline-none focus:border-gray-100 focus:placeholder:text-gray-200"
        />
        <button
          disabled={queries.length >= 5}
          onClick={handleAddQuery}
          className={`px-4 py-2 text-white rounded ${queries.length >= 5 ? 'bg-blue-300' : 'bg-blue-500'}`}
        >
                    Add
        </button>
      </div>

      <ul className="space-y-2">
        {queries.map((query, index) => (
          <li key={index} className="flex justify-between p-2 shadow-md rounded-lg">
            <span>{query}</span>
            <button
              onClick={() => handleDeleteQuery(index)}
              className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
                            Delete
            </button>
          </li>
        ))}
      </ul>

      <NextButton onClick={() => onNext(queries)} />
    </div>
  );
};

export default TextQuestionMultiple;

import {useContext, useEffect} from "react";
import { useNavigate} from "react-router-dom";
import useNext from "../useNext";
import {QuestionContext} from "../context";

function Summary(): React.ReactElement {
  const { answers: data } = useContext(QuestionContext);

  const navigate = useNavigate();
  const next = useNext();

  // Attempt to answer any questions that are left unanswered
  useEffect(() => {
    next();
  }, []);

  function resetAnswers(): void {
    navigate("/");
  }

  return (
    <div className="p-8 rounded-lg shadow-lg overflow-scroll">
      <h1 className="text-2xl font-bold mb-3">Summary</h1>
      <div className="flex m-auto w-full justify-between mb-8">
        <button
          className="px-8 py-2 mt-8 bg-blue-600 text-white rounded-lg w-full md:w-auto"
          onClick={() => navigate('/results')}>Create your documentation</button>
        <button
          className="bg-red-600 m-auto px-8 py-2 mt-8 text-white rounded-lg"
          onClick={resetAnswers}
        >
                  Start Over
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* IDE Selection */}
        <div className="p-6 rounded shadow-md">
          <h2 className="text-lg font-semibold mb-4">IDE Selection</h2>
          <ul>
            {data.ide_selection?.map((ide, idx) => (
              <li key={idx} className="py-1">{ide}</li>
            ))}
          </ul>
        </div>

        {/* Languages Used */}
        <div className="p-6 rounded shadow-md">
          <h2 className="text-lg font-semibold mb-4">Languages Used</h2>
          <ul>
            {data.languages_used?.map((lang, idx) => (
              <li key={idx} className="py-1">{lang}</li>
            ))}
          </ul>
        </div>

        {/* Frameworks Used */}
        <div className="p-6 rounded shadow-md">
          <h2 className="text-lg font-semibold mb-4">Frameworks Used</h2>
          <ul>
            {data.frameworks_used?.map((framework, idx) => (
              <li key={idx} className="py-1">{framework}</li>
            ))}
          </ul>
        </div>

        {/* Documentation Preference */}
        <div className="p-6 rounded shadow-md">
          <h2 className="text-lg font-semibold mb-4">Documentation Preference</h2>
          <p>{data.doc_preference}</p>
        </div>

        {/* Preferred Documentation Platforms */}
        <div className="p-6 rounded shadow-md">
          <h2 className="text-lg font-semibold mb-4">Preferred Documentation Platforms</h2>
          <ul>
            {data.preferred_doc_platforms?.map((platform, idx) => (
              <li key={idx} className="py-1">{platform}</li>
            ))}
          </ul>
        </div>

        {/* First Choice for Search */}
        <div className="p-6 rounded shadow-md">
          <h2 className="text-lg font-semibold mb-4">First Choice for Search</h2>
          <p>{data.search_first_choice}</p>
        </div>

        {/* Frequent Coding Concepts */}
        <div className="p-6 rounded shadow-md">
          <h2 className="text-lg font-semibold mb-4">Frequent Coding Concepts</h2>
          <ul>
            {data.frequent_coding_concepts?.map((concept, idx) => (
              <li key={idx} className="py-1">{concept}</li>
            ))}
          </ul>
        </div>

        {/* Recent Queries */}
        <div className="p-6 rounded shadow-md col-span-2">
          <h2 className="text-lg font-semibold mb-4">Recent Queries</h2>
          <ul>
            {data.recent_queries?.map((query, idx) => (
              <li key={idx} className="py-1">{query}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Summary;

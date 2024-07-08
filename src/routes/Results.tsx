import { useState, useEffect, useContext, useRef } from 'react';
import { prompt } from "../ai/api";
import { QuestionContext } from "../context";
import LoadingIcon from "../components/LoadingIcon";
import ResultMenu from "../components/ResultMenu";
import Congratulations from "../components/Congratulations";
import CheatSheet from "../components/CheatSheet";

function Results() {
  const { answers, storedResults, setStoredResults } = useContext(QuestionContext);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const isFetching = useRef(false);

  async function fetchData(force?: true) {
    if (!force && (storedResults && Object.keys(storedResults).length)) {
      setData(storedResults);
      return;
    }
    if (isFetching.current) {
      return;
    }
    isFetching.current = true;
    setLoading(true);
    try {
      const response = await prompt(answers);
      setData(response);
      setStoredResults(response);
    } catch (error) {
      console.error("Error fetching the data", error);
      // Handle error appropriately
    } finally {
      setLoading(false);
      isFetching.current = false;
    }
  }

  useEffect(() => {
    fetchData();
  }, [answers]);

  if (loading || !data) {
    return <LoadingIcon />;
  }

  return (
    <>
      <div className="flex justify-end">
        <ResultMenu fetchData={fetchData} />
      </div>
      <Congratulations />
      <CheatSheet content={data} />
    </>
  );
}

export default Results;

import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useContext } from "react";
import { QuestionContext } from "./context.ts";

export default function useNext() {
  const { answers } = useContext(QuestionContext);
  const { questionId } = useParams();
  const n = useNavigate();
  const location = useLocation();

  return () => {
    const nextKey = Object.keys(answers).find((key) => {
      if (key !== questionId && !answers[key]) {
        return key;
      }
    });
    if (nextKey) {
      n(`/${nextKey}`);
    } else {
      if (location.pathname !== '/summary') {
        n("/summary");
      }
    }
  };
}

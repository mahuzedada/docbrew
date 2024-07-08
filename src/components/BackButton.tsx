import { useNavigate } from "react-router-dom";

function BackButton(): React.ReactElement {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="px-4 font-bold text-white rounded text-left"
    >
      &#8592;
    </button>
  );
}

export default BackButton;

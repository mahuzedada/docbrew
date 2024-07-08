import { useNavigate } from "react-router-dom";
import { useState } from 'react';

interface Props {
    fetchData: any;
    setShowEmailForm: any;
}
const MobileMenu = ({ fetchData, setShowEmailForm }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  function resetAnswers(): void {
    navigate("/");
  }

  return (
    <div className="relative">
      {/* Menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="block text-gray-200 focus:text-gray-50 focus:outline-none p-2 rounded-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Menu Items */}
      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl">
          <button
            className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
            onClick={() => {
              fetchData(true);
              setIsOpen(false);
            }}
          >
                        Refresh Meals
          </button>
          <button
            className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
            onClick={() => {
              navigate('/summary');
              setIsOpen(false);
            }}
          >
                        View Summary
          </button>
          <button
            className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
            onClick={() => {
              setShowEmailForm(true);
              setIsOpen(false);
            }}
          >
                        Email Complete Result
          </button>
          <button
            className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
            onClick={() => {
              resetAnswers();
              setIsOpen(false);
            }}
          >
                        Restart
          </button>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;

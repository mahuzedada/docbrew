function NextButton({ onClick }): React.ReactElement {

  return (
    <button
      className="w-full bg-gradient-to-r from-cyan-600 to-lime-600 text-white mt-4 py-2 px-4 rounded focus:outline-none transition-colors duration-200 ease-in-out"
      onClick={onClick}
    >
        Next
    </button>
  );
}

export default NextButton;

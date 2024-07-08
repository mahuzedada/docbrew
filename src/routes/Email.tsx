
interface Props {
  setShowEmailForm: any;
}

const Email = ({ setShowEmailForm }: Props) => {

  return (
    <div className="text-white">
      <div style={{background: 'linear-gradient(45deg, blue, purple, red)'  }} className="max-w-sm mx-auto rounded-xl shadow-2xl space-y-4">
        <div>

        </div>
        <div className="w-full h-12 text-sm shadow-2xl flex justify-end items-center p-6">
          <button onClick={() => setShowEmailForm(false)}>
                Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Email;

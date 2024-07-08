interface ContainerProps {
  children: React.ReactNode;
}

function Container({ children }: ContainerProps): React.ReactElement {
  return (
    <div className="mx-auto p-4 text-white md:p-8 max-w-md md:max-w-xl lg:max-w-3xl h-screen bg-gradient-to-r from-purple-900 via-pink-800 to-blue-900 overflow-scroll">
      {children}
    </div>
  );
}

export default Container;

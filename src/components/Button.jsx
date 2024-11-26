


const Button = ({clickHandler, children, className = 'hover:bg-red-600 bg-red-400'}) => {
  return (
    <button onClick={clickHandler} className={`${className} transition duration-300 text-white font-bold py-2 mt-4 px-4 rounded-xl ml-1`}>
      {children}
    </button>
  );
};

export default Button;

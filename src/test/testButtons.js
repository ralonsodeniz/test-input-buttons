const TestButton = ({ id, onClick, selectedInput }) => (
  <button
    style={{
      width: 200,
      height: 100,
      outline: 0,
      backgroundColor: +selectedInput === id ? 'red' : 'blue',
      color: 'white',
      fontSize: '100%',
      fontFamily: 'inherit',
      border: 0,
    }}
    id={id}
    onClick={onClick}
  >
    {id}
  </button>
);

export default TestButton;

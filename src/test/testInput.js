import { useRef, useEffect } from 'react';

const TestInput = ({ id, onChange, name, defaultChecked, value }) => {
  const input = useRef(null);

  useEffect(() => {
    defaultChecked && onChange(input.current.value);
  }, []);

  return (
    <label
      style={{
        width: 200,
        height: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: input.current?.checked ? 'red' : 'blue',
        color: 'white',
      }}
    >
      <span>{value}</span>
      <input
        type="radio"
        name={name}
        id={id}
        ref={input}
        style={{ display: 'none' }}
        onChange={(event) => onChange(event.target.value)}
        value={value}
        defaultChecked={defaultChecked}
      />
    </label>
  );
};

export default TestInput;

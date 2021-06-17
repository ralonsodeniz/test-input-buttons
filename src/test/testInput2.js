import { useEffect } from 'react';
import { StyledInput } from './testInput.styled';

const TestInput2 = ({ id, onChange, name, defaultChecked }) => {
  useEffect(() => {
    defaultChecked && onChange(id);
  }, []);

  return (
    <div>
      <StyledInput
        type="radio"
        name={name}
        id={id}
        onChange={(event) => onChange(event.target.value)}
        value={id}
        defaultChecked={defaultChecked}
      />
      <label
        style={{
          width: 200,
          height: 100,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'blue',
          color: 'white',
        }}
        htmlFor={id}
      >
        {id}
      </label>
    </div>
  );
};

export default TestInput2;

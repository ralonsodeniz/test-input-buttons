import { useState, useCallback } from 'react';
import TestInput from './testInput';
import TestInput2 from './testInput2';
import TestButton from './testButtons';

const inputArray = [
  { id: 352353463246, index: 345235455123, value: 46345654745 },
  { id: 9808707, index: 90080880767, value: 67568658 },
  { id: 675858446, index: 67558598656, value: 969765898579 },
];

const inputArray2 = [
  { id: 3523534632462, index: 3452354551232 },
  { id: 98087072, index: 900808807672 },
  { id: 6758584462, index: 675585986562 },
];

const inputArray3 = [
  { id: 35235346324623, index: 34523545512323 },
  { id: 980870723, index: 9008088076723 },
  { id: 67585844623, index: 6755859865623 },
];

const Test = () => {
  const [selectedInput, setSelectedInput] = useState(0);
  const [selectedInput2, setSelectedInput2] = useState(0);
  const [selectedInput3, setSelectedInput3] = useState(inputArray3[0].id);

  const handleInput3Change = useCallback(
    (event) => setSelectedInput3(event.target.id),
    [],
  );
  return (
    <>
      <h1>Input con ref: {selectedInput}</h1>
      <div style={{ display: 'flex', flexDirection: 'row', margin: 10 }}>
        {inputArray.map((input, index) => (
          <TestInput
            key={input.index}
            id={input.id}
            value={input.value}
            name={'test'}
            onChange={setSelectedInput}
            defaultChecked={index === 0}
          />
        ))}
      </div>
      <h1>Input con estilos: {selectedInput2}</h1>
      <div style={{ display: 'flex', flexDirection: 'row', margin: 10 }}>
        {inputArray2.map((input, index) => (
          <TestInput2
            key={input.index}
            id={input.id}
            name={'test2'}
            onChange={setSelectedInput2}
            defaultChecked={index === 0}
          />
        ))}
      </div>
      <h1>botón: {selectedInput3}</h1>
      <div style={{ display: 'flex', flexDirection: 'row', margin: 10 }}>
        {inputArray3.map((input) => (
          <TestButton
            key={input.index}
            id={input.id}
            name={'test2'}
            onClick={handleInput3Change}
            selectedInput={selectedInput3}
          />
        ))}
      </div>
    </>
  );
};

export default Test;

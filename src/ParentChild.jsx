import './App.css';
import { useState } from 'react';

function Child({ updateState }) {
  const clickHandler = (value) => {
    updateState(value);
  };

  return (
    <>
      <div>Child</div>
      <button onClick={clickHandler('Updated From child')}>
        Change Parent Value
      </button>
    </>
  );
}

function Parent() {
  const [value, setValue] = useState('I need to be updated from my child');

  function updateState(valueFromChild) {
    setValue(valueFromChild);
  }
  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child updateState={updateState} />
      </div>
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <Parent />
    </div>
  );
}

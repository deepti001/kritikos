import React from 'react';
import Counter from './components/specific/Counter';
import Button from './components/common/Button/Button';

const App: React.FC = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <h1>Welcome to PS Pulse</h1>
      <Counter></Counter>
       <Button onClick={handleClick}>Click Me</Button>
    </div>
  );
};

export default App;

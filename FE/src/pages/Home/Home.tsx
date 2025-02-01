import React from 'react';
import HeroBanner from '../../components/common/HeroBanner/HeroBanner';
// import Counter from './components/specific/Counter';
// import Button from './components/common/Button/Button';

const Home: React.FC = () => {
  // const handleClick = () => {
  //   console.log('Button clicked!');
  // };

  return (
    <div>
      <HeroBanner />
      {/* <h1>Welcome to PS Pulse</h1> */}
      {/* <Counter></Counter> */}
      {/* <Button onClick={handleClick}>Click Me</Button> */}
    </div>
  );
};

export default Home;

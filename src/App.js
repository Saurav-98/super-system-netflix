import React from 'react';
import Jumbotron from './components/jumbotron';
import jumboData from '../src/fixtures/jumbo.json';

const App = () => {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <h1>Hello Again</h1>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
};

export default App;

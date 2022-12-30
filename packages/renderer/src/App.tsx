import React, {Suspense} from 'react';
import './styles.css';
declare global {
  interface Window {
    myapi: {nyan: (str: string) => Promise<string>; test: () => string};
  }
}

const getNya = async () => {
  const message = await window.myapi.test();
  console.log(message);
  return message;
};

const App = () => {
  getNya();
  return (
    <>
      <p>te</p>
      <p>{}</p>
    </>
  );
};

export default App;

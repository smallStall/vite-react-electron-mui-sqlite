import './styles.css';

declare global {
  interface Window {
    myapi: {
      nyan: (str: string) => Promise<string>;
      test: () => Promise<object[]>;
      nonce: () => Promise<string>;
    };
  }
}

const getNya = async () => {
  const array = await window.myapi.test();
  return array;
};

const App = () => {};

export default App;

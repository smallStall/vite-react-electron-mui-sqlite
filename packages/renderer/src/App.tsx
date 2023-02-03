import './styles.css';
import {HashRouter} from 'react-router-dom';
import {Route, Routes} from 'react-router';
import {ProjectPage} from './components/templates/projectPage';
import {LotsPage} from './components/templates/lotsPage';
import {OperationPage} from './components/templates/operationPage';
import React from 'react';

declare global {
  interface Window {
    sqliteApi: {
      nyan: (str: string) => Promise<string>;
      getProjects: () => Promise<object[]>;
      getLots: (projectId: string) => Promise<object[]>;
      getOperations: (lotId: string) => Promise<object[]>;
      reset: () => void;
      nonce: () => Promise<string>;
    };
  }
}

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={<ProjectPage />}
        />
        <Route
          path="/lots"
          element={<LotsPage />}
        />
        <Route
          path="/operations"
          element={<OperationPage />}
        />
      </Routes>
    </HashRouter>
  );
};

export default App;

import './styles.css';
import {HashRouter} from 'react-router-dom';
import {Route, RouterProvider, Routes} from 'react-router';
import {ProjectPage} from './components/templates/projectPage';
import {LotsPage} from './components/templates/lotsPage';
import React from 'react';

declare global {
  interface Window {
    myapi: {
      nyan: (str: string) => Promise<string>;
      getProjects: () => Promise<object[]>;
      getLots: (projectId: string) => Promise<object[]>;
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
      </Routes>
    </HashRouter>
  );
};

export default App;

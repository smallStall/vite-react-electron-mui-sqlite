import React from 'react';
import {createRoot} from 'react-dom/client';

import App from '/@/App';

(async () => {
  const root = createRoot(document.getElementById('app'));
  root.render(<App />);
})();

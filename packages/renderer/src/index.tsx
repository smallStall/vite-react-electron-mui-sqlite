import React from 'react';
import {createRoot} from 'react-dom/client';
import createCache from '@emotion/cache';
import {CacheProvider} from '@emotion/react';

import App from '/@/App';

(async () => {
  const cache = createCache({
    key: 'my-prefix-key',
    prepend: true,
    nonce: 'ZTIxZTAyMmYtZThiMS00ODY5LTliNzQtMTljZDY0ZTcyNjQ5',
  });
  const root = createRoot(document.getElementById('app'));
  root.render(
    <CacheProvider value={cache}>
      <App />
    </CacheProvider>,
  );
})();

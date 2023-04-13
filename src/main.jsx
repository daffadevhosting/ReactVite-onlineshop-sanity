// src/main.jsx
import React, {Suspense} from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Loading from './components/Loading';

const App = React.lazy(() => import('./App')); // Lazy-loaded

ReactDOMClient.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<Loading/>}>
        <App />
    </Suspense>
  </React.StrictMode>,
)


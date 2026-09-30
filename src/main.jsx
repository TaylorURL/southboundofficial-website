import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@app/App.jsx';
import './index.css';
import { syncThemeColor } from '@app/themeColor.js';

const container = document.getElementById('root');
const tree = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// The build writes every route into its own document. A page that already
// holds its first screen is adopted rather than drawn again, but only where the
// document and the router agree on which page it is; the dev server and the
// 404 carry no stamp and are drawn from nothing.
const path = window.location.pathname.replace(/(.)\/$/, '$1');

if (container.getAttribute('data-prerendered') === path) {
  hydrateRoot(container, tree);
} else {
  createRoot(container).render(tree);
}

syncThemeColor();

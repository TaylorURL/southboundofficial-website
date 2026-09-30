import { StaticRouter } from 'react-router';
import { renderToString } from 'react-dom/server';
import App from '@app/App.jsx';
import { META, ORIGIN } from '@constants/meta.js';

export { META, ORIGIN };

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  );
}

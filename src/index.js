import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'react-quill/dist/quill.snow.css';
import 'nprogress/nprogress.css';
import { enableES5 } from 'immer';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from 'src/serviceWorker';
import { SettingsProvider } from 'src/context/SettingsContext';
import { restoreSettings } from 'src/utils/settings';
import App from 'src/App';

enableES5();

const settings = restoreSettings();

ReactDOM.render(
  <SettingsProvider settings={settings}>
    <App />
  </SettingsProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();

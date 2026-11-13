import React from 'react';
import ReactDOM from 'react-dom/client';

// Nunito is bundled (not loaded from Google Fonts) so the native app works offline.
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/600.css';
import '@fontsource/nunito/700.css';
import '@fontsource/nunito/800.css';
import '@fontsource/nunito/900.css';
import '@fontsource/nunito/400-italic.css';
import '@fontsource/nunito/700-italic.css';
import '@fontsource/nunito/900-italic.css';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

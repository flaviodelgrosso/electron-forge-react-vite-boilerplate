import React from 'react';
import { createRoot } from 'react-dom/client';

import 'ui/styles/index.scss';
import App from 'ui/App';

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);

root.render(<App />);

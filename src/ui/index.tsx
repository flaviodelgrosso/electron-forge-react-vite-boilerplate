import { createRoot } from 'react-dom/client';

import '@/ui/globals.css';
import App from '@/ui/App';

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);

root.render(<App />);

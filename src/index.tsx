import 'bulma/css/bulma.css'; // Framework CSS utilizado para estilização base
import { createRoot } from 'react-dom/client';
import { App } from './App';

// Ponto de entrada da aplicação — monta o componente raiz no elemento #root
createRoot(document.getElementById('root') as HTMLElement).render(<App />);

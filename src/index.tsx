import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.scss';
import App from './components/App';

const container = document.getElementById('app');
const root = createRoot(container as Element);
root.render(<App />);

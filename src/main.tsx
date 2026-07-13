import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Register service worker for robust PWA installation and offline capabilities
if ('serviceWorker' in navigator) {
  // Clear any corrupted assets from older cache versions instantly
  if ('caches' in window) {
    caches.keys().then((keys) => {
      keys.forEach((key) => {
        if (key !== 'majmuatul-khutob-v4') {
          caches.delete(key).then(() => {
            console.log(`Cleared outdated cache: ${key}`);
          });
        }
      });
    });
  }

  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js?v=4')
      .then((reg) => {
        console.log('Service Worker registered', reg);
        // Force the service worker to look for updates immediately on load
        reg.update();
      })
      .catch((err) => console.error('Service Worker registration failed', err));
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);


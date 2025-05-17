
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles/card-flip.css'

// Set up document title based on language
const setPageTitle = () => {
  const path = window.location.pathname;
  if (path.includes('/en')) {
    document.title = 'Maranjá | Marketing and Automation for Clinics';
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content', 
      'Agency specialized in marketing and automation for clinics. We create websites, service automation, queue management, appointment scheduling and more.'
    );
  } else {
    document.title = 'Maranjá | Marketing e Automação para Clínicas';
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content', 
      'Agência especializada em marketing e automação para clínicas. Criamos websites, automação de atendimento, gestão de filas, agendamentos e muito mais.'
    );
  }
};

// Initial title setup
setPageTitle();

// Listen for route changes to update title
const originalPushState = history.pushState;
history.pushState = function() {
  originalPushState.apply(this, arguments);
  setPageTitle();
};

window.addEventListener('popstate', setPageTitle);

createRoot(document.getElementById("root")!).render(<App />);

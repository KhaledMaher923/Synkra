import { AppRoutes } from './routes/AppRoutes.jsx';
import { Toaster } from 'sonner';

function App() {
  return (
    <>
      <AppRoutes />
      <Toaster position="top-right" richColors theme="system" />
    </>
  );
}

export default App;
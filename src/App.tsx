import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Page } from './types';
import { NavigationShell } from './components/NavigationShell';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { Process } from './pages/Process';
import { Budget } from './pages/Budget';

const pageVariants = {
  initial: { 
    opacity: 0, 
    scale: 0.96, 
    y: 20 
  },
  animate: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { 
      type: 'spring' as const, 
      stiffness: 90, 
      damping: 22,
      mass: 0.8
    } 
  },
  exit: { 
    opacity: 0, 
    scale: 0.96, 
    y: -20,
    transition: { 
      duration: 0.25, 
      ease: 'easeInOut' as const 
    } 
  }
};

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'portfolio':
        return <Portfolio />;
      case 'process':
        return <Process />;
      case 'budget':
        return <Budget />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <NavigationShell currentPage={currentPage} setCurrentPage={setCurrentPage}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full flex flex-col items-center"
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>
    </NavigationShell>
  );
}

export default App;

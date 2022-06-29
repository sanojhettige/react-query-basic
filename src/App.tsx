import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

const Dramas = React.lazy(() => import('./pages/Dramas'));
const DramaViewer = React.lazy(() => import('./pages/DramaViewer'));

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Dramas />} />
        <Route path='/drama/:id' element={<DramaViewer />} />
      </Routes>
    </div>
  );
}

export default App;

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainLayout from './layout/MainLayout';
import Homepage from './pages/homepage/Homepage';
function App() {
  return (
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route index element={<Homepage />} />
            </Route>
        </Routes>
     </BrowserRouter>
  );
}

export default App;

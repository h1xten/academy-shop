import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainLayout from './layout/MainLayout';
import Homepage from './pages/homepage/Homepage';
import Itempage from './pages/itempage/Itempage';
function App() {
  return (
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route index element={<Homepage />} />
                <Route path='item/:name' element={<Itempage />} />
            </Route>
        </Routes>
     </BrowserRouter>
  );
}

export default App;

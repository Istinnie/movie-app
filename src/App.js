
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FavoritePage from './pages/FavoritePage';
import HomePage from './pages/HomePage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/movie-app" element={<HomePage/>}></Route>
          <Route path="/favorite" element={<FavoritePage/>}></Route>        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

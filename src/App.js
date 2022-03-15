import Home from './components/Home/Home';
import "./App.css";
import Analytice from './components/Analytice/Analytice';
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import Selas from './components/Selas/Selas';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/analytice' element={<Analytice/>}/>
        <Route path='/selas' element={<Selas/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

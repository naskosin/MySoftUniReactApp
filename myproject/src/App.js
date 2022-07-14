import Header from './components/Header/Header';
import Login from './components/Login/Login';
import { Home } from './components/Home/Home';
import Register from './components/Register/Register';
import { Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div >
      
      <Header />
    
      <main>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
  </Routes>
      </main>
   
    </div>
  );
}

export default App;

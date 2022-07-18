import Header from './components/Header/Header';
import  {AuthProvider}  from './contexts/AuthContext';
import Gallery from './components/Gallery/Gallery';
import Login from './components/Login/Login';
import { Home } from './components/Home/Home';
import Register from './components/Register/Register';
import { Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <AuthProvider>
    <div >
      
      <Header />
    
      <main>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/gallery" element = {<Gallery/>}/>
  </Routes>
      </main>
   
    </div>
    </AuthProvider>
  );
 
}

export default App;

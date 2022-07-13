import Header from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div >
      
      <Header />
    
      <main>
   <Routes>
<Route path ="/" element = <Home/> />
   </Routes>

      
     
      </main>
   
    </div>
  );
}

export default App;

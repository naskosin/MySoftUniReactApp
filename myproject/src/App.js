import Header from './components/Header/Header';
import  {AuthProvider}  from './contexts/AuthContext';
import Create from './components/Create/Create';
import Gallery from './components/Gallery/Gallery';
import Contacts from './components/Contacts/Contacts';
import Edit from './components/Edit/Edit';
import Details from './components/Details/Details';
import PageNotFound from './components/PageNotFound/PageNotFound'
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
    <Route path="/create" element={<Create/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/gallery" element = {<Gallery/>}/>
    <Route path="/gallery/:baitId" element = {<Details/>}/>
    <Route path="*" element = {<PageNotFound/>}/>
    <Route path="/contacts" element={<Contacts/>}/>
    <Route path="gallery/edit/:baitId" element = {<Edit/>}/>
  </Routes>
      </main>
   
    </div>
    </AuthProvider>
  );
 
}

export default App;

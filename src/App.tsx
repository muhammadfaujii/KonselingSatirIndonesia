import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Dasboard from './page/Dasboard';
import User from './page/User';
import Aktivities from './page/Aktivities';
import Report from './page/Report';
import Settings from './page/Settings';
import LogOut from './page/LogOut';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/'element={<Dasboard/>} />
          <Route path='/user'element={<User/>} />
          <Route path='/aktivities'element={<Aktivities/>}/>
          <Route path='/report'element={<Report/>}/>
          <Route path='/settings'element={<Settings/>}/>
          <Route path='/logout'element={<LogOut/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;

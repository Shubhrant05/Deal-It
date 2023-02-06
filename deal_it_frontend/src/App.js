import './App.css';
import Authentication_Page from './components/authentication';
import Login from './components/authentication/login';
import Dashboard from './components/complaints'
import CaretakerDashboard from './components/caretaker';
import {Routes , Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Authentication_Page />} />
        <Route path='/dashboard' element = {<Dashboard />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/caretaker' element = {<CaretakerDashboard />}/>
        
        </Routes>
    </div>
  );
}

export default App;

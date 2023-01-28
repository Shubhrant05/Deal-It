import './App.css';
import Authentication_Page from './components/authentication';
import Dashboard from './components/complaints'
import {Routes , Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Authentication_Page />} />
        <Route path='/dashboard' element = {<Dashboard />}/>
        
        </Routes>
    </div>
  );
}

export default App;

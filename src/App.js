import logo from './logo.svg';
import './App.css';
import Home from './components/pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/pages/dashboard/Dashboard';
import AddBanner from './components/pages/dashboard/AddBanner';

function App() {
  return (
    <div className=" bg-red-50 min-h-screen">
      <Home></Home>
      <Routes>
        <Route path='/dashboard'  element={<Dashboard></Dashboard>}>
        <Route index element={<AddBanner></AddBanner>}/>
        </Route>
        
        
      </Routes>
    </div>
  );
}

export default App;

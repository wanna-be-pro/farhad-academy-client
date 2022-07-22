import logo from './logo.svg';
import './App.css';
import Home from './components/pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/pages/dashboard/Dashboard';
import AddBanner from './components/pages/dashboard/AddBanner';
import Footer from './components/Shared/Footer';

function App() {
  return (
    <div className=" bg-red-50 min-h-screen lg:w-[1500px] mx-auto">
      <Home></Home>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<AddBanner />} />
        </Route>
      </Routes>


    <Footer/>

      <div className="text-5xl ">
        <h2 className='text-center'>
          {" "}
          under maintan <br />
          the developer is so lazy. <br />
          wait for the lazy developer
        </h2>
      </div>
    </div>
  );
}

export default App;

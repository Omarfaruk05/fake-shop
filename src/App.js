import './App.css';
import NavComponent from '../src/components/shared/NavComponent'
import Home from '../src/components/pages/Home'
import { Route, Routes } from 'react-router-dom';
import AllProducts from './components/pages/AllProducts/AllProducts';
import Details from './components/pages/Details/Details';


function App() {
  return (
    <div>
      <NavComponent></NavComponent>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/products/' element={<AllProducts></AllProducts>}></Route>
        <Route path='/contact' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Home></Home>}></Route>
        <Route path='/details/:id' element={<Details></Details>}></Route>
      </Routes>
    </div>
  );
}

export default App;

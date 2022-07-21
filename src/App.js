import './App.css';
import NavComponent from '../src/components/shared/NavComponent'
import Home from '../src/components/pages/Home'
import { Route, Routes } from 'react-router-dom';
import AllProducts from './components/pages/AllProducts/AllProducts';
import Details from './components/pages/Details/Details';
import Footer from './components/shared/Footer/Footer';
import NotFound from './components/shared/NotFound/NotFound';


function App() {
  return (
    <div>
      <NavComponent></NavComponent>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/products/' element={<AllProducts></AllProducts>}></Route>
        <Route path='/details/:id' element={<Details></Details>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

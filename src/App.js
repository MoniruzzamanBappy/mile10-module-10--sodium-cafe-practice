import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Searchbar from "./components/Shared/Searchbar/Searchbar";
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div>
      <Header></Header>
      <div className="app">
        <Routes>
          <Route path="/" element={<Searchbar></Searchbar>}></Route>
          <Route path="/home" element={<Searchbar></Searchbar>}>
            
          </Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

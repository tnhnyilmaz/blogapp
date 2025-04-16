import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import Login from './Pages/Login';
import PostDetail from "./Pages/PostDetail";
import Register from "./Pages/Register";
import Navbar from "./components/layout/Navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<><Navbar /><Home /></>} />
          <Route path="/post/:id" element={<><Navbar /><PostDetail /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

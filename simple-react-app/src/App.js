// import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Form from './Componensts/form';
import Navbar from "./Componensts/Navbar/nav";
import Teams from './pages/team';

function App() {
  return (
    <><Router>
      <Navbar />
      <Routes>
        <Route path="/"  />
 
        <Route path="/team" element={<Teams />} />
      </Routes>
    </Router><div>
        <Form />
      </div></>
  );
}

export default App;

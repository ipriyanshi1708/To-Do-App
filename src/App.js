import './App.css';
import Form from './components/Form';
import Login from "./components/Login"
import Signup from "./components/Signup"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
    <Form />
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

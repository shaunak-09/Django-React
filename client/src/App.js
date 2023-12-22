// import logo from './logo.svg';
import './App.css';
import Land from './components/home';
import Createroom from './components/createroom';
import Joinroom from './components/joinroom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Land />} />
        <Route path="/create" element={<Createroom />} />
        <Route path="/join" element={<Joinroom />} />
      </Routes>
      </BrowserRouter>
      <Land />
    </div>
  );
}

export default App;

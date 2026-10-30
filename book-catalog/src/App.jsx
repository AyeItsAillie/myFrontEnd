import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalog from "./pages/Catalog";
import "./App.css";
import ManageBooks from "./pages/ManageBooks";
import { ViewTransition } from 'react';
import Navigation from './components/Navigation'; 

function App() {
return (
<BrowserRouter>
  <Navigation/>


  <Routes>
    <Route path="/" element={<Catalog />} />
    <Route path="/manage" element={<ManageBooks />} />
  </Routes>
</BrowserRouter>
);
}
export default App;
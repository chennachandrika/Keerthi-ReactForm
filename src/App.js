import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form/Form"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Form/>} />
        <Route exact path="/home" element={<p>Home</p>} />
      </Routes>
    </BrowserRouter>
  );
}

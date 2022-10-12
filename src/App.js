import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<p>Hi</p>} />
        <Route exact path="/home" element={<p>Home</p>} />
      </Routes>
    </BrowserRouter>
  );
}

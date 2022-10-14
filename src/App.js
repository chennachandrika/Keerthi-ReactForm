import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonalDetails from "./components/PersonalDetails/PersonalDetails";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/personal-details" element={<PersonalDetails/>} />
      </Routes>
    </BrowserRouter>
  );
}

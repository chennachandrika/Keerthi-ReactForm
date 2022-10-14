import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import PersonalDetails from "./components/PersonalDetails/PersonalDetails";
import SavedJobs from "./components/SavedJobs/SavedJobs";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/personal-details" element={<PersonalDetails/>} />
        <Route exact path="/applied-jobs" element={<AppliedJobs/>} />
        <Route exact path="/saved-jobs" element={<SavedJobs/>} />
      </Routes>
    </BrowserRouter>
  );
}

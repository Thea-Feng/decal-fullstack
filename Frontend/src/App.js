import Home from "./page/home";
import HowItWorks from "./page/howItWorks";
import './public.css';
import CurrentListings from "./page/currentListings";
import SpecificListing from "./page/specificListing";
import NewListing from "./page/newListing";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateProfile from "./page/createProfile";
import SignIn from "./page/signIn";
import StudentProfile from "./page/studentProfile";
import { useParams } from "react-router-dom"; 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/tutorial" element={<HowItWorks/>} />
        <Route path="/currentListing" element={<CurrentListings/>} />
        <Route path="/specificListing" element={<SpecificListing/>} />
        <Route path="/newListing" element={<NewListing/>} />
        <Route path="/createProfile" element={<CreateProfile/>} />
        <Route path="/signIn" element={<SignIn/>}/>
        <Route path="/studentProfile" element={<StudentProfile/>} />


      </Routes>
    </Router>
  );
}
export default App;

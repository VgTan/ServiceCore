import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import EduPage from "./Pages/EduPage";
import Household from "./Pages/Household";
import About from "./Pages/About";
import GS from "./Pages/GetStarted";
import { Register } from "./Components/LoginRegis/Register";
import { PersonDetails } from "./Components/CARD/personDetail";
import { PersonDetailsAC } from "./Components/CARDAC/personDetailAC";
import { PersonDetailsHK } from "./Components/CARDHK/personDetailHK";
import { PersonDetailsSM } from "./Components/CARDSM/personDetailSM";
import { PersonDetailsBindo } from "./Components/CARDINDO/personDetailBindo";

import WC from "./Pages/Data"
import HK from "./Pages/DataHK"
import AC from "./Pages/DataAC"
import SM from "./Pages/DataSM"

import BI from "./Pages/DataBindo"
import ENG from "./Pages/DataBing"
import SCI from "./Pages/DataSci"
import MAT from "./Pages/DataMat"

import Heading from "./Components/Header"
import Footer from "./Components/Footer"
import { PersonDetailsBing } from "./Components/CARDBING/personDetailBing";
import { PersonDetailsMath } from "./Components/CARDMATH/personDetailMath";
import { PersonDetailsSci } from "./Components/CARDSCIENCE/personDetailSci";


const App = () => {
  return (
    <>
    
    <Router>
    <Heading />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/education' element={<EduPage/>} />
        <Route path='/household' element={<Household/>} />
        <Route path='/about' element={<About />} />
        {/* <Route path='/login' element={<GS />} />
        <Route path='/register' element={<Register />} /> */}
        <Route path='/toilet' element={<WC />} />
        <Route path="/wc/:id/" element={<PersonDetails />} />
        <Route path='/housekeep' element={<HK />} />
        <Route path="/hk/:id/" element={<PersonDetailsHK />} />
        <Route path='/air' element={<AC />} />
        <Route path="/ac/:id/" element={<PersonDetailsAC />} />
        <Route path='/mobil' element={<SM />} />
        <Route path="/sm/:id/" element={<PersonDetailsSM />} />
        <Route path='/indo' element={<BI />} />
        <Route path="/indo/:id/" element={<PersonDetailsBindo />} />
        <Route path='/eng' element={<ENG />} />
        <Route path="/eng/:id/" element={<PersonDetailsBing />} />
        <Route path='/mat' element={<MAT />} />
        <Route path="/mat/:id/" element={<PersonDetailsMath />} />
        <Route path='/sci' element={<SCI />} />
        <Route path="/sci/:id/" element={<PersonDetailsSci />} />
      </Routes>
      <Footer/>
    </Router>
    
    </>
  );
};

export default App;

import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import ContactUs from './pages/ContactUs';
import About from "./pages/About";
import ApplyNow from './pages/ApplyNow';
import DiplomaCourses from './pages/diplomacourses/DiplomaCourses';
import DiplomaPharmacy from './pages/diplomacourses/DiplomaPharmacy';
import DiplomaFrontOffice from './pages/diplomacourses/DiplomaFrontOffice';
import DiplomaFoodProduction from './pages/diplomacourses/DiplomaFoodProduction';
import DiplomaHousekeeping from './pages/diplomacourses/DiplomaHousekeeping';
import DiplomaFoodandBeverage from "./pages/diplomacourses/diplomaFoodandBeverage";
import DiplomaAviation from './pages/diplomacourses/DiplomaAviation';
import DiplomaConfectionary from './pages/diplomacourses/DiplomaConfectionary';
import UGCourses from './pages/ugcourses/UGCourses';
import Engineering from './pages/ugcourses/engineering/Engineering';
import MtechDataScience from './pages/ugcourses/engineering/MtechDataScience';
import MtechAIML from './pages/ugcourses/engineering/MtechAIML';
import MtechDigitalCommunication from './pages/ugcourses/engineering/MtechDigitalCommunication';
import BtechCSE from './pages/ugcourses/engineering/BtechCSE';
import BtechCloud from './pages/ugcourses/engineering/BtechCloud';
import BtechDataScience from './pages/ugcourses/engineering/BtechDataScience';
import BtechCyber from './pages/ugcourses/engineering/BtechCyber';
import BtechAIML from './pages/ugcourses/engineering/BtechAIML';
import MtechStructural from './pages/ugcourses/engineering/civil/MtechStructural';
import MtechTransportation from './pages/ugcourses/engineering/civil/MtechTransportation';
import BtechCivil from './pages/ugcourses/engineering/civil/BtechCivil';
import MtechThermal from './pages/ugcourses/engineering/mechanical/MtechThermal';
import MtechProduction from './pages/ugcourses/engineering/mechanical/MtechProduction';
import MtechRenewable from './pages/ugcourses/engineering/mechanical/MtechRenewable';
import MtechEV from './pages/ugcourses/engineering/mechanical/MtechEV';
import BtechME from './pages/ugcourses/engineering/mechanical/BtechME';
import BtechMechatronics from './pages/ugcourses/engineering/mechanical/BtechMechatronics';
import Agriculture from './pages/ugcourses/agriculture/Agriculture';
import BtechDiaryTechnology from './pages/ugcourses/agriculture/btech/BtechDiaryTechnology';
import FoodTechnology from './pages/ugcourses/agriculture/btech/FoodTechnology';
import BscAgriculture from './pages/ugcourses/agriculture/bsc/BscAgriculture';
import BscHorticulture from './pages/ugcourses/agriculture/bsc/BscHorticulture';
import BscMicrobiology from './pages/ugcourses/agriculture/bsc/BscMicrobiology';
import MscAgronomy from './pages/ugcourses/agriculture/msc/MscAgronomy';
import MscHorticulture from './pages/ugcourses/agriculture/msc/MscHorticulture';
import MscFood from './pages/ugcourses/agriculture/msc/MscFood';
import MscMicrobiology from './pages/ugcourses/agriculture/msc/MscMicrobiology';
import MscGenetetics from './pages/ugcourses/agriculture/msc/MscGenetetics';
import MscNutrition from './pages/ugcourses/agriculture/msc/MscNutrition';
import HotelManagement from './pages/ugcourses/hotel-management/HotelManagement';
import BachelorHotelManagement from './pages/ugcourses/hotel-management/BachelorHotelManagement';
import BscHotelManagement from './pages/ugcourses/hotel-management/BscHotelManagement';
import MastersHotelManagement from './pages/ugcourses/hotel-management/MastersHotelManagement';
import MastersTourism from './pages/ugcourses/hotel-management/MastersTourism';

function App() {

  return (
  <div className=" w-[100vw] h-[100vh] flex flex-col overflow-x-hidden relative " >
       <Header/>
      <Routes>
          <Route path="/" element={
              <Homepage />
            }/>
          <Route path="/contact-us" element={
              <ContactUs />
            }/>
          <Route path="/about-us" element={
              <About />
            }/>
            <Route path="/apply-now" element={
              <ApplyNow />
            }/>
            <Route path="/programmes/diploma-courses" element={
              <DiplomaCourses />
            }/>
            <Route path="/programmes/diploma-courses/diploma-in-pharmacy" element={
              <DiplomaPharmacy />
            }/>
            <Route path="/programmes/diploma-courses/diploma-in-front-office" element={
              <DiplomaFrontOffice />
            }/>
            <Route path="/programmes/diploma-courses/diploma-in-food-production" element={
              <DiplomaFoodProduction />
            }/>
            <Route path="/programmes/diploma-courses/diploma-in-housekeeping" element={
              <DiplomaHousekeeping />
            }/>
            <Route path="/programmes/diploma-courses/diploma-in-food-and-beverage" element={
              <DiplomaFoodandBeverage />
            }/>
            <Route path="/programmes/diploma-courses/diploma-in-aviation-management" element={
              <DiplomaAviation />
            }/>
            <Route path="/programmes/diploma-courses/diploma-in-confectionary" element={
              <DiplomaConfectionary />
            }/>

            {/* UG Courses Routes */}
            <Route path="/programmes/ug-courses" element={
              <UGCourses />
            }/>

            {/* Engineering */}
            <Route path="/programmes/ug-courses/engineering" element={
              <Engineering />
            }/>
            <Route path="/programmes/ug-courses/engineering/mtech/data-science-engineering" element={
              <MtechDataScience />
            }/>
             <Route path="/programmes/ug-courses/engineering/mtech/ai-ml" element={
              <MtechAIML />
            }/>
          <Route path="/programmes/ug-courses/engineering/mtech/digital-communication" element={
              <MtechDigitalCommunication />
            }/>
            <Route path="/programmes/ug-courses/engineering/btech/computer-science-engineering" element={
              <BtechCSE />
            }/>
            <Route path="/programmes/ug-courses/engineering/btech/cloud-computing-engineering" element={
              <BtechCloud />
            }/>
            <Route path="/programmes/ug-courses/engineering/btech/data-science-engineering" element={
              <BtechDataScience />
            }/>
            <Route path="/programmes/ug-courses/engineering/btech/cybersecurity-engineering" element={
              <BtechCyber />
            }/>
            <Route path="/programmes/ug-courses/engineering/btech/ai-ml" element={
              <BtechAIML />
            }/>

            {/* civil */}
            <Route path="/programmes/ug-courses/engineering/mtech/structural-engineering" element={
              <MtechStructural />
            }/>
            <Route path="/programmes/ug-courses/engineering/mtech/transportation-engineering" element={
              <MtechTransportation />
            }/>
            <Route path="/programmes/ug-courses/engineering/btech/civil-engineering" element={
              <BtechCivil />
            }/>

            {/* Mechanical */}
            <Route path="/programmes/ug-courses/engineering/mtech/thermal-engineering" element={
              <MtechThermal />
            }/>
            <Route path="/programmes/ug-courses/engineering/mtech/production-engineering" element={
              <MtechProduction />
            }/>
            <Route path="/programmes/ug-courses/engineering/mtech/renewable-energy" element={
              <MtechRenewable />
            }/>
            <Route path="/programmes/ug-courses/engineering/mtech/electric-vehicle" element={
              <MtechEV />
            }/>
            <Route path="/programmes/ug-courses/engineering/btech/mechanical-engineering" element={
              <BtechME />
            }/>
            <Route path="/programmes/ug-courses/engineering/btech/mechatronics-and-robotics" element={
              <BtechMechatronics />
            }/>


            {/* Agriculture */}
            <Route path="/programmes/ug-courses/agriculture" element={
              <Agriculture />
            }/>
            <Route path="/programmes/ug-courses/agriculture/btech/dairy-technology" element={
              <BtechDiaryTechnology />
            }/>
            <Route path="/programmes/ug-courses/agriculture/btech/food-technology" element={
              <FoodTechnology />
            }/>

            {/* bsc */}
            <Route path="/programmes/ug-courses/agriculture/bsc/agriculture" element={
              <BscAgriculture />
            }/>
            <Route path="/programmes/ug-courses/agriculture/bsc/horticulture" element={
              <BscHorticulture />
            }/>
            <Route path="/programmes/ug-courses/agriculture/bsc/microbiology" element={
              <BscMicrobiology />
            }/>

            {/* msc */}
            <Route path="/programmes/ug-courses/agriculture/msc/agronomy" element={
              <MscAgronomy />
            }/>
            <Route path="/programmes/ug-courses/agriculture/msc/horticulture" element={
              <MscHorticulture />
            }/>
            <Route path="/programmes/ug-courses/agriculture/msc/food-technology" element={
              <MscFood/>
            }/>
            <Route path="/programmes/ug-courses/agriculture/msc/microbiology" element={
              <MscMicrobiology />
            }/>
            <Route path="/programmes/ug-courses/agriculture/msc/genetics-and-plant-breeding" element={
              <MscGenetetics />
            }/>
            <Route path="/programmes/ug-courses/agriculture/msc/nutrition-and-dietetics" element={
              <MscNutrition />
            }/>

            {/* Hotel Management */}
            <Route path="/programmes/ug-courses/hotel-management-and-tourism" element={
              <HotelManagement />
            }/>
            <Route path="/programmes/ug-courses/hotel-management-and-tourism/diploma-in-food-production" element={
              <DiplomaFoodProduction />
            }/>
            <Route path="/programmes/ug-courses/hotel-management-and-tourism/diploma-in-bakery-and-confectionary" element={
              <DiplomaConfectionary />
            }/>
            <Route path="/programmes/ug-courses/hotel-management-and-tourism/diploma-in-food-and-beverage" element={
              <DiplomaFoodandBeverage />
            }/>
            <Route path="/programmes/ug-courses/hotel-management-and-tourism/diploma-in-front-office" element={
              <DiplomaFrontOffice />
            }/>
            <Route path="/programmes/ug-courses/hotel-management-and-tourism/diploma-in-housekeeping" element={
              <DiplomaHousekeeping />
            }/>

            {/* courses */}
            <Route path="/programmes/ug-courses/hotel-management-and-tourism/diploma-in-aviation-management" element={
              <DiplomaAviation />
            }/>
            <Route path="/programmes/ug-courses/hotel-management-and-tourism/bachelor/hotel-management" element={
              <BachelorHotelManagement />
            }/>
            <Route path="/programmes/ug-courses/hotel-management-and-tourism/bsc/hotel-management" element={
              <BscHotelManagement />
            }/>
            <Route path="/programmes/ug-courses/hotel-management-and-tourism/masters/hotel-management" element={
              <MastersHotelManagement />
            }/>
            <Route path="/programmes/ug-courses/hotel-management-and-tourism/masters/tourism-and-travel-management" element={
              <MastersTourism />
            }/>
          
      </Routes>
  </div>
  )
}

export default App

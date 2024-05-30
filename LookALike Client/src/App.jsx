import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import FirstPage from '../Comps/FirstPage';
import LogIn from '../Comps/LogIn';
import Register from '../Comps/Register';
import HomePage from '../Comps/HomePage';
import MyWardrobe from '../Comps/MyWardrobe';
import UploadItem from '../Comps/UploadItem';
import MarketPlace from '../Comps/MarketPlace';
import CreateAd from '../Comps/CreateAd';
import Ad from '../Comps/Ad';
import Map from '../Comps/Map';
import BottomSelectionPage from '../Comps/BottomSelectionPage';
import CalendarPage from '../Comps/CalendarPage';
import FCManualLook from '../Comps/FCManualLook';
import TopSelectionPage from '../Comps/TopSelectionPage';

function App() {
  const [selectedTop, setSelectedTop] = useState(null);
  const [selectedBottom, setSelectedBottom] = useState(null);

  return (
    <>
      <Routes>
        <Route index element={<FirstPage />}></Route>
        <Route path='/login' element={<LogIn />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/HomePage' element={<HomePage />}></Route>
        <Route path='/MyWardrobe' element={<MyWardrobe />}></Route>
        <Route path='/UploadItem' element={<UploadItem />}></Route>
        <Route path='/MarketPlace' element={<MarketPlace />}></Route>
        <Route path='/CreateAd/:item' element={<CreateAd />}></Route>
        <Route path='/Map' element={<Map />}></Route>
        <Route path='/Ad' element={<Ad />}></Route>
        <Route path="/FCManualLook" element={<FCManualLook selectedTop={selectedTop} selectedBottom={selectedBottom} setSelectedTop={setSelectedTop} setSelectedBottom={setSelectedBottom} />} />  
        <Route path="/select-top" element={<TopSelectionPage setSelectedTop={setSelectedTop} />} />
        <Route path="/select-bottom" element={<BottomSelectionPage setSelectedBottom={setSelectedBottom} />} />
        <Route path="/calendar" element={<CalendarPage selectedTop={selectedTop} selectedBottom={selectedBottom} />} />
        {/* <Route path="/SaveLook" element={<SaveLook selectedTop={selectedTop} selectedBottom={selectedBottom} />} /> */}
      </Routes>
    </>
  );
}

export default App;

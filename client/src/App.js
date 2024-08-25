import logo from './logo.svg';
import './App.css';
import React, { lazy, Suspense,useEffect } from 'react';
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Footer from './components/Footer/Footer.js';
import Product from './components/Orders/Product';
import Landing from './components/Landing/Landing';
import Notification from './components/UI/Notification';
import { fetchWaitingListData, sendWaitingListData } from './store/waiting-list-actions';
import Orders from './components/Orders/Orders';
import Dashboard from './components/Dashboard/Dashboard';
import NewOrder from './components/NewOrder/NewOrder';
import WaitingList from './components/waitingList/WaitingList';
import Management from './components/Management/Management';
import { fetchProductionListData, sendProductionListData } from './store/orders-list-actions';
import { fetchEventsList, fetchMenuItems,fetchMenus } from './store/manage-store-actions';



function App() {

  const dispatch = useDispatch();

  const [language,languageHandler]=React.useState(true);

  useEffect(() => {

    dispatch(fetchWaitingListData());
    dispatch(fetchProductionListData());
    dispatch(fetchEventsList())
    dispatch(fetchMenuItems());
    dispatch(fetchMenus());
    dispatch(fetch);
  }, [dispatch]);



  return (
    <div className="App">
      <Notification language={language} />
      <Router>
        <Footer languageHandler={languageHandler} language={language}/>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            
            <Route path='/' element={<Landing language={language} />}/>
            <Route path='/new-order' element={<NewOrder language={language}/>}/>
            <Route path='/dashboard' element={<Dashboard language={language}/>}/>
            <Route path='/waiting-list' element={<WaitingList language={language}/>}/>
            <Route path='/production' element={<Orders language={language}/>}/>
            <Route path='/management' element={<Management language={language}/>}/>
            {/* <Route path='/eat-anu' element={<EatAnu language={language}/>}/> */}
            {/* <Route path='/niran' element={<Product language={language}/>}/> */}
          </Routes>
        </Suspense> 
      
      </Router>
    </div>
  );
}

export default App;

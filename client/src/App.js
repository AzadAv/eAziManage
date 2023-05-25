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
import NewOrder from './components/NewOrder/NewOrder';
import WaitingList from './components/waitingList/WaitingList';
import Management from './components/Management/Management';
// const Orders = lazy(() => import('./components/Orders/Orders'));
// const NewOrder = lazy(() => import('./components/NewOrder/NewOrder'));
// const WaitingList = lazy(() => import('./components/waitingList/WaitingList'));
// const Management = lazy(() => import('./components/Management/Management'));


function App() {

  const dispatch = useDispatch();

  const [language,languageHandler]=React.useState(true);
  const waitingList =useSelector((state) => state.waitingListStoreReducer.events);


  useEffect(() => {

    dispatch(fetchWaitingListData());
    
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

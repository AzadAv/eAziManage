import logo from './logo.svg';
import './App.css';
import React, { Suspense, useContext,useReducer } from 'react';
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";

import Header from './components/Header';
import Orders from './components/orders/Orders';
import NewOrder from './components/NewOrder/NewOrder';
import EatAnu from './components/eatAnu/EatAnu';
import Management from './components/Management/Management';
import Footer from './components/Footer/Footer.js';
import WaitingList from './components/waitingList/WaitingList';
import OrderLabel from './components/waitingList/OrderLabel';
import Product from './components/orders/Product';
function App() {

  const [language,languageHandler]=React.useState(true);
  return (
    <div className="App">
      {/* <Header /> */}
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/new-order' element={<NewOrder language={language}/>}/>
            <Route path='/waiting-list' element={<WaitingList language={language}/>}/>
            <Route path='/' element={<Orders language={language}/>}/>
            <Route path='/eat-anu' element={<EatAnu language={language}/>}/>
            <Route path='/management' element={<Management language={language}/>}/>
            <Route path='/niran' element={<Product language={language}/>}/>
          </Routes>
        </Suspense> 
      <Footer languageHandler={languageHandler} language={language}/>
      </Router>
    </div>
  );
}

export default App;

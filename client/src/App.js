import logo from './logo.svg';
import './App.css';
import React, { lazy, Suspense, useContext,useReducer } from 'react';
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";


// import Orders from './components/Orders/Orders';
// import NewOrder from './components/NewOrder/NewOrder';
// import EatAnu from './components/eatAnu/EatAnu';
// import Management from './components/Management/Management';
import Footer from './components/Footer/Footer.js';
// import WaitingList from './components/waitingList/WaitingList';
import Product from './components/Orders/Product';
import Landing from './components/Landing/Landing';

const Orders = lazy(() => import('./components/Orders/Orders'));
const NewOrder = lazy(() => import('./components/NewOrder/NewOrder'));
const WaitingList = lazy(() => import('./components/waitingList/WaitingList'));
const Management = lazy(() => import('./components/Management/Management'));
function App() {

  const [language,languageHandler]=React.useState(true);
  return (
    <div className="App">
      {/* <Header /> */}
      <Router>
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
      <Footer languageHandler={languageHandler} language={language}/>
      </Router>
    </div>
  );
}

export default App;

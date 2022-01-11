import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import makeStore from "./redux/store";
import Register from './pages/register/Register'
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// import {BrowserRouter as Router, Route} from "react-router-dom";
// import { BrowserRouter,Routes} from 'react-router-dom';
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';



const store = makeStore();

const WithProvider = () => (
  <Provider store={store}>
 
  <BrowserRouter>
 
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/register" element={<Register/>} />  
     
    </Routes>
  </BrowserRouter>
  <ToastContainer  />
  </Provider>


);

ReactDOM.render(<WithProvider />, document.getElementById("root"));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React, { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Adminlogin from "./components/Adminlogin";
import Loginsup from "./components/Loginsup";
import Profilesup from "./components/Profilesup";
import Profileadmin from "./components/Profileadmin";
import { supadminLogin, adminLogin } from "./JS/actions";
import { BrowserRouter } from "react-router-dom";
import Contact from "./Client/Pages/Contact";
import Partners from "./Client/Pages/Partners";
import FAQ from "./Client/Pages/FAQ";
import Agents from "./Client/Pages/Agents";
import Offers from "./Client/Pages/Offers";
import Footer from "./components/Footer";
import Nav from "./components/NavBar/Nav";
import Home from "./Client/Pages/Home";
import About from "./Client/Pages/About";

import Root from "./Root";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const superlog = window.localStorage.getItem("superAdminSesame");
    const adminlog = window.localStorage.getItem("adminSesame");
    dispatch(supadminLogin(JSON.parse(superlog)));
    dispatch(adminLogin(JSON.parse(adminlog)));
  }, []);
  return (
    <div>
      <Switch>
        <Route exact path="/admin">
          <Adminlogin />
        </Route>
        <Route exact path="/superadmin">
          <Loginsup />
        </Route>
        <Route exact path="/superadmin/profile">
          <Profilesup />
        </Route>
        <Route exact path="/admin/profile">
          <Profileadmin />
        </Route>
        
        <Route exact path="/safa">          
           <Nav />
           <Home/>
        </Route>
        <Route exact path="/safa/about">          
           <Nav />
           <About/>
        </Route>
        <Route exact path="/safa/offers">
          <Nav />
          <Offers/>
        </Route>
       
        <Route exact path="/safa/agents">
           <Agents/>
        </Route>
        <Route exact path="/safa/partners">
           <Partners/>
        </Route>
      
              
      </Switch>
    </div>
  );
}

export default App;

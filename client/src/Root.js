import React, { useState } from "react";
import "./App.css";
import Home from "./Client/Pages/Home";
import About from "./Client/Pages/About";
import Nav from "./components/NavBar/Nav";
import { Route, Switch } from "react-router-dom";
import Contact from "./Client/Pages/Contact";
import Partners from "./Client/Pages/Partners";
import FAQ from "./Client/Pages/FAQ";
import Agents from "./Client/Pages/Agents";
import Offers from "./Client/Pages/Offers";
import Footer from "./components/Footer";

// import FormContact from "./components/FormContact";

function Root() {
  return (
    <div>
      
      <Nav />
      <Switch>
        <Route exact path="/safa" component={Home} />
        <Route exact path="/safa/about" component={About} />
        <Route path="/safa/offers" component={Offers} />
        <Route path="safa/agents" component={Agents} />
        <Route path="/safa/partners" component={Partners} />
        <Route path="/safa/faq" component={FAQ} />

        {/* <Route path="/contact" component={FormContact} /> */}
      </Switch>

      <Footer />
    </div>
  );
}

export default Root;

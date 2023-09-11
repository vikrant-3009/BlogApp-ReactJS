import React from "react";

import Header from './components/Header/Header';
import Router from './Router';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Router />
      <Footer />
    </React.Fragment>
  );
}

export default App;
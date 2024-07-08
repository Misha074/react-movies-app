import {Header} from './layout/header'
import {Main} from './layout/Main'
import {Footer} from './layout/Footer'
import React, { Component } from "react";

class App extends Component {

  render() {
    return <>
            <Header />
            <Main />
            <Footer />
          </>
  }

  
}

export default App;

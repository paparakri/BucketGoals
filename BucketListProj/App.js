import React, {Component} from 'react';
import { createRouteNavigator, SignedOut } from './nav'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      signedIn: false,
      checkedSignedIn: false
    }
  }

  render(){
    const Layout = SignedOut;
    return(
      <Layout />
    );
  }
}

export default App;
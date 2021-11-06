import React, {Component} from 'react';
import { Text } from 'react-native';
import { createRouteNavigator, SignedOut, SignedIn } from './nav'
import { userControls } from './auth';
import { set } from 'traverse';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      signedIn: false,
      checkedSignedIn: false
    }
  }

  async componentDidMount(){
    try {
      const controls = new userControls;
      const data = await controls.enterBool();
      this.setState({ checkedSignedIn: true });
      const signBool = (data === 'true')
      if(data !== null){
        this.setState({ checkedSignedIn: true, signedIn: signBool });
      }
      console.log('AppData', this.state.signedIn)
    } catch(err){
      console.log(err);
    }
  }

  render(){
    let Layout = <Text>There was an error</Text>
    if(this.state.signedIn){
      Layout = SignedIn;
    } else {
      Layout = SignedOut;
    }
      
    return(
      <Layout />
    );
  }
}

export default App;
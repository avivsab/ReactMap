import React, {Component} from 'react';
import NavComponent from './components/Nav';
import MapComponent from './components/Map'
import './App.css';
import {Container} from 'reactstrap'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      mainHeader: "React Map"
    }
  }
  render() {
    return (
      <div className="App" >
       <NavComponent  appMainHeader={this.state.mainHeader}/>
       <Container>
       <MapComponent />
       </Container>
      </div>
    );
  }
}
  

export default App;

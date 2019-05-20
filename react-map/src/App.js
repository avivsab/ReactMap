import React, {Component} from 'react';
import NavComponent from './components/Nav';
import './App.css';

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
      </div>
    );
  }
}
  

export default App;
